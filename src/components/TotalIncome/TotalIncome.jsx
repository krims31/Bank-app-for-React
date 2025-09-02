import { useEffect, useRef, useState } from "react";

export default function TotalIncome() {
  const pieChartRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

  // Данные сегментов
  const segments = [
    { color: "#4caf50", start: 0, end: 40, price: "$100" },
    { color: "#2196f3", start: 40, end: 70, price: "$200" },
    { color: "#ff9800", start: 70, end: 100, price: "$300" },
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
      <div className="total-income">
        <h1>Total Income</h1>
        <p>Aug 2025</p>
        <h2>$3 762.11</h2>
      </div>
      <div className="pie-chart-container">
        <div
          ref={pieChartRef}
          className="pie-chart"
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
