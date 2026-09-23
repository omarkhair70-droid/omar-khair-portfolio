import { chromium } from "playwright";
import fs from "node:fs/promises";

const baseURL = "http://127.0.0.1:3000";
const outputDir = "qa-output";
await fs.mkdir(outputDir, { recursive: true });

const errors = [];
const results = [];

async function inspectViewport(name, viewport, options = {}) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
    reducedMotion: options.reducedMotion ?? "no-preference",
    isMobile: options.isMobile ?? false,
    hasTouch: options.hasTouch ?? false
  });
  const page = await context.newPage();

  const consoleErrors = [];
  const pageErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  const response = await page.goto(baseURL, { waitUntil: "networkidle" });
  if (!response?.ok()) errors.push(`${name}: Home response ${response?.status() ?? "missing"}`);

  await page.locator("h1").waitFor({ state: "visible" });
  await page.waitForTimeout(options.reducedMotion === "reduce" ? 600 : 4200);

  const snapshot = await page.evaluate(() => {
    const header = document.querySelector(".site-header");
    const h1 = document.querySelector("h1");
    const indexLink = Array.from(document.querySelectorAll("header a")).find(
      (element) => element.textContent?.trim().toLowerCase() === "index"
    );

    return {
      title: h1?.textContent?.replace(/\s+/g, " ").trim() ?? "",
      headerText: header?.textContent?.replace(/\s+/g, " ").trim() ?? "",
      hasIndex: Boolean(indexLink),
      canvasCount: document.querySelectorAll("canvas").length,
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      scrollHeight: document.documentElement.scrollHeight,
      innerHeight: window.innerHeight
    };
  });

  if (!snapshot.title.toLowerCase().includes("systems") || !snapshot.title.toLowerCase().includes("pulse")) {
    errors.push(`${name}: opening title missing expected proposition`);
  }
  if (!snapshot.headerText.toLowerCase().includes("omar") || !snapshot.headerText.toLowerCase().includes("khair")) {
    errors.push(`${name}: Omar identity missing from header`);
  }
  if (!snapshot.hasIndex) errors.push(`${name}: Index navigation missing`);
  if (snapshot.headerText.toLowerCase().includes("available for selected work")) {
    errors.push(`${name}: commercial availability copy leaked into Home header`);
  }
  if (snapshot.scrollWidth > snapshot.innerWidth + 1) {
    errors.push(`${name}: horizontal overflow ${snapshot.scrollWidth} > ${snapshot.innerWidth}`);
  }
  if (snapshot.scrollHeight <= snapshot.innerHeight) {
    errors.push(`${name}: downstream Home content is not reachable`);
  }
  if (options.reducedMotion !== "reduce" && snapshot.canvasCount < 1) {
    errors.push(`${name}: interactive material field canvas missing`);
  }

  await page.screenshot({ path: `${outputDir}/${name}.png`, fullPage: false });

  if (consoleErrors.length) {
    errors.push(`${name}: console errors: ${consoleErrors.join(" | ")}`);
  }
  if (pageErrors.length) {
    errors.push(`${name}: page errors: ${pageErrors.join(" | ")}`);
  }

  results.push({ name, viewport, ...snapshot, consoleErrors, pageErrors });
  await context.close();
  await browser.close();
}

await inspectViewport("desktop-1440x900", { width: 1440, height: 900 });
await inspectViewport("desktop-1920x1080", { width: 1920, height: 1080 });
await inspectViewport("mobile-390x844", { width: 390, height: 844 }, { isMobile: true, hasTouch: true });
await inspectViewport("mobile-430x932", { width: 430, height: 932 }, { isMobile: true, hasTouch: true });
await inspectViewport("reduced-motion-1440x900", { width: 1440, height: 900 }, { reducedMotion: "reduce" });

async function recordDesktopMotion() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir: `${outputDir}/video-desktop`, size: { width: 1440, height: 900 } }
  });
  const page = await context.newPage();
  await page.goto(baseURL, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  await page.mouse.move(1040, 260, { steps: 18 });
  await page.waitForTimeout(900);
  await page.mouse.move(1180, 520, { steps: 22 });
  await page.waitForTimeout(2400);
  await page.mouse.move(940, 690, { steps: 18 });
  await page.waitForTimeout(1800);
  await page.mouse.move(760, 460, { steps: 16 });
  await page.waitForTimeout(1600);

  await context.close();
  await browser.close();
}

async function recordMobileMotion() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    recordVideo: { dir: `${outputDir}/video-mobile`, size: { width: 390, height: 844 } }
  });
  const page = await context.newPage();
  await page.goto(baseURL, { waitUntil: "networkidle" });
  await page.waitForTimeout(1600);
  await page.touchscreen.tap(300, 360);
  await page.waitForTimeout(1600);
  await page.evaluate(() => window.scrollBy({ top: 96, behavior: "smooth" }));
  await page.waitForTimeout(900);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  await page.waitForTimeout(1800);
  await context.close();
  await browser.close();
}

await recordDesktopMotion();
await recordMobileMotion();

const navigationBrowser = await chromium.launch({ headless: true });
const navigationPage = await navigationBrowser.newPage({ viewport: { width: 1440, height: 900 } });
await navigationPage.goto(baseURL, { waitUntil: "networkidle" });
await navigationPage.getByRole("link", { name: "Index" }).click();
await navigationPage.waitForURL(/\/work$/);
if (!navigationPage.url().endsWith("/work")) errors.push("Index did not navigate to /work");
await navigationBrowser.close();

await fs.writeFile(
  `${outputDir}/report.json`,
  JSON.stringify({ generatedAt: new Date().toISOString(), results, errors }, null, 2)
);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("HOME_OPENING_QA=PASS");
