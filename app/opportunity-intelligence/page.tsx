import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Opportunity Intelligence",
  description: "How Omar Khair discovers, qualifies and connects digital transformation opportunities to informed business decisions.",
  alternates: { canonical: "/opportunity-intelligence" },
  robots: { index: false, follow: false }
};

const steps = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Find the right signal.",
    description: "Search beyond headlines. Identify the buyer, operating problem, location, procurement stage, deadline and the reason an opportunity could matter."
  },
  {
    number: "02",
    label: "QUALIFY",
    title: "Test the real fit.",
    description: "Map technical requirements and pass/fail gates, evaluate delivery and evidence readiness, separate facts from assumptions, and surface commercial risks."
  },
  {
    number: "03",
    label: "CONNECT",
    title: "Make a useful introduction.",
    description: "Bring a concise decision brief to the appropriate commercial or solutions lead, clarify the parties' roles and agree the next step before further work."
  }
];

const diligence = [
  ["01", "Eligibility", "References, financial thresholds, local presence, legal entity and required evidence"],
  ["02", "Solution", "Product scope, architecture, integrations, security, delivery and support"],
  ["03", "Commercial", "Bid costs, guarantee requirements, contract duration, cash flow and payment terms"],
  ["04", "Decision", "Go / No-go recommendation, assumptions, blockers and named action owners"]
];

const evidence = [
  { name: "HILTECH", descriptor: "B2B systems", detail: "Product discovery, RFQ and operational workflow design.", href: "/work/hiltech" },
  { name: "Nova", descriptor: "Engineering depth", detail: "Native Android, backend services and release architecture.", href: "/work/nova" },
  { name: "Balcona", descriptor: "Operational systems", detail: "Multi-role workflows spanning orders, fulfilment and management.", href: "/work/balcona" }
];

export default function OpportunityIntelligencePage() {
  return (
    <main id="main-content" className={styles.root}>
      <section className={styles.hero} aria-labelledby="opportunity-hero-title">
        <div className={styles.container}>
          <div className={styles.heroTop}>
            <p className={styles.kicker}>OMAR KHAIR <span>/</span> OPPORTUNITY INTELLIGENCE</p>
            <p className={styles.heroTopRight}>INDEPENDENT PRACTICE · EGYPT / MENA</p>
          </div>
          <h1 id="opportunity-hero-title" className={styles.heroTitle}>
            Find the <em>signal.</em><br />
            Qualify the <em>fit.</em><br />
            Move the <em>work.</em>
          </h1>
          <div className={styles.heroBottom}>
            <p>Opportunity research, procurement qualification and commercial coordination for complex digital projects.</p>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      </section>

      <section className={styles.intro} aria-labelledby="opportunity-why">
        <div className={styles.container}>
          <div className={styles.sectionHeader}><span>01 / THESIS</span><span>OPPORTUNITY ≠ QUALIFIED DEAL</span></div>
          <div className={styles.introGrid}>
            <h2 id="opportunity-why">A tender is a <em>starting point.</em><br />Not a strategy.</h2>
            <div className={styles.introCopy}>
              <p>Finding a public procurement notice is easy. Understanding whether a specific company should invest in pursuing it takes more work.</p>
              <p>I combine a software and product background with independent business development research to translate complex requirements into evidence-led commercial decisions.</p>
              <p className={styles.quiet}>No implied buyer access. No unverified vendor qualifications. No promised award.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="opportunity-process">
        <div className={styles.container}>
          <div className={styles.sectionHeader}><span>02 / WORKFLOW</span><span>FROM DISCOVERY TO DECISION</span></div>
          <h2 id="opportunity-process" className={styles.sectionTitle}>Three stages.<br /><em>One clear decision.</em></h2>
          <div className={styles.stepGrid}>
            {steps.map((step) => (
              <article className={styles.step} key={step.number}>
                <div className={styles.stepMeta}><span>{step.number}</span><span>{step.label}</span></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.caseSection} aria-labelledby="opportunity-case">
        <div className={styles.container}>
          <div className={styles.sectionHeader}><span>03 / RESEARCH SAMPLE</span><span>PUBLIC PROCUREMENT · UGANDA</span></div>
          <div className={styles.caseGrid}>
            <div>
              <span className={styles.caseReference}>UNCDF-00718 / 2026</span>
              <h2 id="opportunity-case" className={styles.caseTitle}>One notice.<br /><em>Many gates.</em></h2>
              <p className={styles.caseLead}>A public request for a digital solution supporting financial management and market linkages for tourism businesses in Uganda.</p>
              <a className={styles.source} href="https://www.ungm.org/Public/Notice/320461" target="_blank" rel="noreferrer">View official public notice ↗</a>
            </div>
            <div>
              <div className={styles.metrics}>
                <div><strong>200</strong><span>target tourism MSMEs</span></div>
                <div><strong>63</strong><span>requirements tracked in a working analysis</span></div>
                <div><strong>18</strong><span>open questions in that analysis</span></div>
              </div>
              <p className={styles.caseNote}>The notice describes the project scope. The requirement and question counts are from Omar&apos;s own working traceability register, not independently certified procurement figures. This is a research example, not a client engagement, confirmed bid, supplier qualification or award.</p>
            </div>
          </div>
          <div className={styles.checkGrid}>
            {diligence.map(([number, title, text]) => (
              <article className={styles.check} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className={styles.decision}>
            <span>DECISION STATE</span>
            <strong>Qualification pending.</strong>
            <p>No supplier evidence has been verified for this example. A Go / No-go decision requires the prospective bidder&apos;s documents and current tender instructions.</p>
          </div>
        </div>
      </section>

      <section className={styles.proof} aria-labelledby="opportunity-proof">
        <div className={styles.container}>
          <div className={styles.sectionHeader}><span>04 / PRODUCT BACKGROUND</span><span>TECHNICAL JUDGEMENT</span></div>
          <div className={styles.introGrid}>
            <h2 id="opportunity-proof">Grounded in <em>building.</em></h2>
            <p className={styles.proofLead}>Technical judgment comes from understanding how systems are scoped, built and operated. These product case studies illustrate adjacent work; they are not claimed as procurement awards.</p>
          </div>
          <div className={styles.proofGrid}>
            {evidence.map((item) => (
              <Link href={item.href} className={styles.proofCard} key={item.name}>
                <span>{item.descriptor}</span>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
                <b>VIEW CASE STUDY ↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.engage} aria-labelledby="opportunity-engage">
        <div className={styles.container}>
          <div className={styles.sectionHeader}><span>05 / COLLABORATION</span><span>AGREE SCOPE BEFORE DELIVERY</span></div>
          <h2 id="opportunity-engage">Let&apos;s make<br /><em>the next decision clear.</em></h2>
          <p>Available to discuss a paid, scoped opportunity assessment, a recurring qualification pilot, or an agreed referral/coordination model. Commercial terms, responsibilities, confidentiality and attribution are agreed before detailed work begins.</p>
          <a href="mailto:omar.khair70@gmail.com?subject=Opportunity%20Intelligence%20%E2%80%94%20Collaboration" className={styles.contact}>START A CONVERSATION <span>↗</span></a>
        </div>
      </section>
    </main>
  );
}
