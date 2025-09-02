import { useEffect, useRef, useState } from "react";

export default function Cashback() {
  const pieChartRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

  // 🔹 больше сегментов
  const segments = [
    { color: "#4caf50", start: 0, end: 15, price: "$120" },
    { color: "#2196f3", start: 15, end: 30, price: "$80" },
    { color: "#ff9800", start: 30, end: 45, price: "$150" },
    { color: "#9c27b0", start: 45, end: 60, price: "$60" },
    { color: "#f44336", start: 60, end: 75, price: "$90" },
    { color: "#00bcd4", start: 75, end: 90, price: "$70" },
    { color: "#8bc34a", start: 90, end: 100, price: "$100" },
  ];

  useEffect(() => {
    if (pieChartRef.current) {
      pieChartRef.current.classList.add("animate");
    }
  }, []);

  const handleMouseMove = (e) => {
    const rect = pieChartRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = (Math.atan2(y, x) * 180) / Math.PI;
    const normalizedAngle = (angle + 360 + 90) % 360;

    const hoveredSegment = segments.find(
      (s) => normalizedAngle >= s.start * 3.6 && normalizedAngle < s.end * 3.6
    );

    if (hoveredSegment) {
      setTooltip({
        visible: true,
        x: e.clientX + 10,
        y: e.clientY + 10,
        text: hoveredSegment.price,
      });
    } else {
      setTooltip({ ...tooltip, visible: false });
    }
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="cashback">
        <h1>Cashback</h1>
        <p>Aug 2025</p>
        <h2>$568.24</h2>
      </div>
      <div className="cashback-chart">
        <div
          ref={pieChartRef}
          className="chart"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            background: `conic-gradient(${segments
              .map((s) => `${s.color} ${s.start}% ${s.end}%`)
              .join(", ")})`,
          }}
        ></div>
        {tooltip.visible && (
          <div
            className="tooltip"
            style={{
              position: "fixed",
              left: tooltip.x,
              top: tooltip.y,
              background: "rgba(0,0,0,0.8)",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "5px",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              fontSize: "14px",
            }}
          >
            {tooltip.text}
          </div>
        )}
      </div>
    </div>
  );
}
