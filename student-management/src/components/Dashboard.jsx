
import { useMemo } from "react";
import { useStudents } from "../context/StudentContext";

function Dashboard() {
  const { students } = useStudents();

  const stats = useMemo(() => {
    const total = students.length;

    const totalMarks = students.reduce(
      (sum, student) => sum + student.marks,
      0
    );

    const passed = students.filter(
      (student) => student.marks >= 40
    ).length;

    return {
      total,
      average: total
        ? (totalMarks / total).toFixed(1)
        : "0.0",
      passed,
      needsSupport: total - passed,
    };
  }, [students]);

  const cards = [
    {
      title: "Total Students",
      value: stats.total,
      symbol: "♙",
      description: "Registered students",
      color: "purple",
    },
    {
      title: "Average Marks",
      value: stats.average,
      symbol: "↗",
      description: "Out of 100 marks",
      color: "blue",
    },
    {
      title: "Passed",
      value: stats.passed,
      symbol: "✓",
      description: "Scored 40 or above",
      color: "green",
    },
    {
      title: "Needs Support",
      value: stats.needsSupport,
      symbol: "!",
      description: "Scored below 40",
      color: "orange",
    },
  ];

  return (
    <section className="dashboard-section">
      <div className="stats-grid">
        {cards.map((card) => (
          <article className="stat-card" key={card.title}>
            <div className="stat-top">
              <span className="stat-title">{card.title}</span>
              <span className={`stat-icon ${card.color}`}>
                {card.symbol}
              </span>
            </div>

            <div className="stat-value">{card.value}</div>
            <p className="stat-description">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
