import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111111",
          color: "#fafaf9",
          padding: "54px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 108,
              height: 108,
              borderRadius: 24,
              background: "#fafaf9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 999,
                border: "8px solid #111111"
              }}
            />
            <div style={{ width: 30, height: 40, position: "relative", display: "flex" }}>
              <div style={{ width: 8, height: 40, borderRadius: 8, background: "#111111" }} />
              <div style={{ position: "absolute", left: 5, top: 17, width: 31, height: 8, background: "#111111", transform: "rotate(-38deg)", transformOrigin: "left center", borderRadius: 8 }} />
              <div style={{ position: "absolute", left: 5, top: 17, width: 31, height: 8, background: "#111111", transform: "rotate(38deg)", transformOrigin: "left center", borderRadius: 8 }} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.03em" }}>Omar Khair</div>
            <div style={{ fontSize: 28, color: "#d6d3d1", letterSpacing: "0.12em" }}>WEBSITES &amp; DIGITAL SYSTEMS</div>
          </div>
        </div>

        <div style={{ fontSize: 38, color: "#e7e5e4", letterSpacing: "-0.01em" }}>
          Business websites • Ordering experiences • RFQ systems • Dashboards
        </div>
      </div>
    ),
    size
  );
}
