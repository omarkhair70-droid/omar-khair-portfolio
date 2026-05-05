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
              color: "#111111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 52,
              fontWeight: 700,
              letterSpacing: "-0.04em"
            }}
          >
            OK
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
