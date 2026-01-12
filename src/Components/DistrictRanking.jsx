import { useState, useMemo } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts"

export default function DistrictRanking({ data }) {
  const [rankBy, setRankBy] = useState("enrolled")

  const sortedDistricts = useMemo(() => {
    const districts = [...data]

    if (rankBy === "enrolled") {
      districts.sort((a, b) => b.enrolled - a.enrolled)
    } else {
      districts.sort(
        (a, b) => b.completionRatePercent - a.completionRatePercent
      )
    }

    return districts
  }, [data, rankBy])

  return (
    <div className="district-rank-card">
      <div className="district-rank-header">
        <h4>District Ranking</h4>

        <select
          value={rankBy}
          onChange={(e) => setRankBy(e.target.value)}
        >
          <option value="enrolled">Rank by Enrollment</option>
          <option value="pass">Rank by Pass %</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={380}>
        <BarChart data={sortedDistricts}>
          <XAxis dataKey="district" />
          <YAxis />
          <Tooltip
            formatter={(value, name) => {
              if (name === "completionRatePercent") {
                return [`${value}%`, "Completion %"]
              }
              return [value, name]
            }}
          />
          <Legend />

          <Bar dataKey="male" fill="#60a5fa" />
          <Bar dataKey="female" fill="#f472b6" />
          <Bar dataKey="others" fill="#c084fc" />
          <Bar dataKey="passed" fill="#34d399" />
          <Bar
            dataKey="assessmentCompleted"
            fill="#fb923c"
            name="Assessment Completed"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
