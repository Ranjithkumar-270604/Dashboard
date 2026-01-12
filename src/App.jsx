import { useEffect, useState } from "react";
import TopBar from "./Components/TopBar";
import SummaryCards from "./Components/SummaryCard";
import CourseProgressChart from "./Components/CourseProgressChart";
import PassStatsChart from "./Components/PassStatsChart";
import AssessmentDonut from "./Components/AssessmentDonut";
import GradeBreakdownPie from "./Components/GradeBreakdownPie";
import DistrictRanking from "./Components/DistrictRanking";
import { fetchDashboard } from "./API/DashBoard";

export default function App() {
  const [data, setData] = useState(null);
  const [viewMode, setViewMode] = useState("monthly"); 

  useEffect(() => {
    fetchDashboard(2024).then(setData);
  }, []);

  if (!data) {
    return <p style={{ padding: 20 }}>Loading...</p>;
  }


  const scaleNumber = (value, factor) =>
    Math.round(value * factor);

  const factor = viewMode === "monthly" ? 1 / 12 : 1 / 4;

  
  const filteredData = {
    ...data,
    summary: {
      totalLearners: scaleNumber(data.summary.totalLearners, factor),
      male: scaleNumber(data.summary.male, factor),
      female: scaleNumber(data.summary.female, factor),
      others: scaleNumber(data.summary.others, factor),
      activeLearners: scaleNumber(data.summary.activeLearners, factor),
      engagedLearners: scaleNumber(data.summary.engagedLearners, factor),
    },
    passStats: {
      overallLearners: scaleNumber(data.passStats.overallLearners, factor),
      assessmentTaken: scaleNumber(data.passStats.assessmentTaken, factor),
      passed: scaleNumber(data.passStats.passed, factor),
      failed: scaleNumber(data.passStats.failed, factor),
    },
    courseProgress: data.courseProgress,
    assessmentCompletion: data.assessmentCompletion,
    gradeBreakdown: data.gradeBreakdown,
    districtRanking: {
      ...data.districtRanking,
      districts: data.districtRanking.districts.map(d => ({
        ...d,
        enrolled: scaleNumber(d.enrolled, factor),
        male: scaleNumber(d.male, factor),
        female: scaleNumber(d.female, factor),
        others: scaleNumber(d.others, factor),
        passed: scaleNumber(d.passed, factor),
        assessmentCompleted: scaleNumber(d.assessmentCompleted, factor),
      })),
    },
  };

  return (
    <>
      <TopBar viewMode={viewMode} setViewMode={setViewMode} />

      <div className="kpi-strip">
        <SummaryCards summary={filteredData.summary} />
      </div>

      <div className="dashboard-grid">
        <div className="panel wide">
          <div className="panel-header">Course progress rate</div>
          <CourseProgressChart data={filteredData.courseProgress} />
        </div>

        <div className="panel">
          <div className="panel-header">Pass Percentage</div>
          <PassStatsChart stats={filteredData.passStats} />
        </div>

        <div className="panel">
          <div className="panel-header">Average assessment score</div>
          <AssessmentDonut data={filteredData.assessmentCompletion} />
        </div>

        <div className="panel">
          <div className="panel-header">Learners Details Breakdown</div>
          <GradeBreakdownPie data={filteredData.gradeBreakdown} />
        </div>
      </div>

      <div className="ranking-section">
        <h3>All District with Ranking</h3>
        <DistrictRanking data={filteredData.districtRanking.districts} />
      </div>
    </>
  );
}
