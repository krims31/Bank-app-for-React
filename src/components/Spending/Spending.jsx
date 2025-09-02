import { useEffect, useRef, useState } from "react";

export default function Spending() {
  const pieChartRef = useRef(null);
  const [show, setShow] = useState(false);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

  const segments = [
    { color: "#f44336", start: 0, end: 20, price: "$250", label: "Food" },
    { color: "#2196f3", start: 20, end: 40, price: "$180", label: "Transport" },
    { color: "#ff9800", start: 40, end: 60, price: "$300", label: "Shopping" },
    { color: "#4caf50", start: 60, end: 80, price: "$120", label: "Entertainment" },
    { color: "#9c27b0", start: 80, end: 100, price: "$90", label: "Other" },
  ];

  // Анимация графика при монтировании
  useEffect(() => {
    if (pieChartRef.current) {
      pieChartRef.current.classList.add("animate");
    }
  }, []);

  // Появление легенды
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
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
        text: `${hoveredSegment.price} - ${hoveredSegment.label}`,
      });
    } else {
      setTooltip(prev => ({ ...prev, visible: false }));
    }
  };

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Заголовок */}
      <div className="spending">
        <h1>Spending in August</h1>
        <i className="bx bx-dots-vertical-rounded"></i>
      </div>

      {/* График */}
      <div className="spending-chart">
        <div
          ref={pieChartRef}
          className="chart-2"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            background: `conic-gradient(${segments
              .map((s) => `${s.color} ${s.start}% ${s.end}%`)
              .join(", ")})`,
          }}
        ></div>

        {/* Tooltip */}
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

      {/* Общая сумма */}
      <div className="totalspending">
        <p>Total Spending</p>
        <h1>$7 683.21</h1>
      </div>

      {/* Легенда */}
      <div className="spending-legend">
        {/* Первая строка */}
        <div className={`legend-row ${show ? "show" : ""}`}>
          {segments.slice(0, 3).map((s) => (
            <div key={s.label} className="legend-item">
              <span className="legend-color" style={{ backgroundColor: s.color }}></span>
              <span className="legend-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Вторая строка */}
        <div className={`legend-row ${show ? "show" : ""}`}>
          {segments.slice(3).map((s) => (
            <div key={s.label} className="legend-item">
              <span className="legend-color" style={{ backgroundColor: s.color }}></span>
              <span className="legend-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
