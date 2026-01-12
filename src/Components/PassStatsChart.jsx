import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  LabelList
} from "recharts";

export default function PassStatsChart({ stats }) {
  const data = [
    {
      name: "Overall Learners",
      value: stats.overallLearners,
      percent: "100%"
    },
    {
      name: "Assessment taken",
      value: stats.assessmentTaken,
      percent: `${Math.round(
        (stats.assessmentTaken / stats.overallLearners) * 100
      )}%`
    },
    {
      name: "Passed",
      value: stats.passed,
      percent: `${Math.round(
        (stats.passed / stats.overallLearners) * 100
      )}%`
    },
    {
      name: "Failed",
      value: stats.failed,
      percent: `${Math.round(
        (stats.failed / stats.overallLearners) * 100
      )}%`
    }
  ];

  const colors = ["#6ecbff", "#32d2e3", "#00d09c", "#ff7b7b"];

  return (
    <BarChart
      width={420}
      height={300}
      data={data}
      layout="vertical"
      barSize={22}
    >
      <XAxis type="number" hide />
      <YAxis
        type="category"
        dataKey="name"
        tick={{ fill: "#bfbfbf", fontSize: 12 }}
      />
      <Bar dataKey="value" radius={[0, 8, 8, 0]}>
        {data.map((_, i) => (
          <Cell key={i} fill={colors[i]} />
        ))}
       
        <LabelList dataKey="value" position="insideRight" fill="#fff" />
      </Bar>
    </BarChart>
  );
}
