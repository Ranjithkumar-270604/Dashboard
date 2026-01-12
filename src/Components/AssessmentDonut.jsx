import { PieChart, Pie, Cell } from "recharts";

export default function AssessmentDonut({ data }) {
  return (
    <div className="donut-layout">
      
      <div className="donut-side">
        <p className="donut-percent">{data.notCompletedPercent}%</p>
        <span>Assessment not completed</span>
      </div>

      
      <PieChart width={220} height={220}>
        <Pie
          data={[
            { value: data.completedPercent },
            { value: data.notCompletedPercent }
          ]}
          dataKey="value"
          innerRadius={80}
          outerRadius={100}
          startAngle={90}
          endAngle={-270}
          paddingAngle={2}
        >
          <Cell fill="#6ecbff" />
          <Cell fill="#ffb36b" />
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fff"
          fontSize="14"
        >
          All Districts
        </text>
      </PieChart>

     
      <div className="donut-side">
        <p className="donut-percent">{data.completedPercent}%</p>
        <span>Assessment completed</span>
      </div>
    </div>
  );
}
