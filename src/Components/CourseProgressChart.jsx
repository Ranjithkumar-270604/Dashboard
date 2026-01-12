import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function CourseProgressChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={data}
        barSize={18}
        barGap={6}
        barCategoryGap={24}
        margin={{ top: 20, right: 20, bottom: 20, left: 10 }}
      >
        <CartesianGrid
          stroke="#2b2b2b"
          strokeDasharray="3 3"
          vertical={false}
        />
        <XAxis
          dataKey="district"
          tick={{ fill: "#bfbfbf", fontSize: 11 }}
        />
        <YAxis
          tick={{ fill: "#bfbfbf", fontSize: 11 }}
        />
        <Tooltip />
        <Legend
          iconType="circle"
          wrapperStyle={{ fontSize: 12 }}
        />
        <Bar dataKey="below" fill="#ff7b7b" radius={[6, 6, 0, 0]} />
        <Bar dataKey="average" fill="#00d09c" radius={[6, 6, 0, 0]} />
        <Bar dataKey="good" fill="#6ecbff" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
