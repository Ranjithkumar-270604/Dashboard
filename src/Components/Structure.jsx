export default function SummaryCards({ summary }) {
  const items = [
    { label: "Total Learner enrolled", value: summary.totalLearners },
    { label: "Male", value: summary.male },
    { label: "Female", value: summary.female },
    { label: "Others", value: summary.others },
    { label: "Active Learners", value: summary.activeLearners },
    { label: "Engaged Learners", value: summary.engagedLearners },
  ];

  return items.map((item, i) => (
    <div className="kpi-card" key={i}>
      <p>{item.label}</p>
      <h2>{item.value}</h2>
    </div>
  ));
}
