import { PieChart, Pie, Cell } from "recharts";

export default function GradeBreakdownPie({ data }) {
  const colors = ["#6ecbff", "#00d09c", "#ffcc00", "#ff7b7b", "#9ca3af"];

  return (
    <div className="grade-layout">
      <PieChart width={260} height={260}>
      <Pie
        data={data}
        dataKey="percent"
        outerRadius={90}
        startAngle={90}
        endAngle={-270}
        labelLine={false}
        label={renderLabel}
      >
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i]} />
        ))}
      </Pie>
    </PieChart>

      <div className="grade-legend">
        {data.map((g, i) => (
          <div key={i} className="grade-item">
            <span
              className="grade-dot"
              style={{ background: colors[i] }}
            />
            {g.label}
          </div>
        ))}
      </div>
    </div>
  );
}






const COLORS = ["#6ecbff", "#00d09c", "#ffb36b", "#ff7b7b", "#e5e7eb"];

const renderLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 14;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={COLORS[index]}
      fontSize={12}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {Math.round(percent * 100)}%
    </text>
  );
};



