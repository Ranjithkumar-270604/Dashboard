export async function fetchDashboard(year) {
  const res = await fetch(`/dashboard_${year}.json`);
  if (!res.ok) throw new Error("Failed to load data");
  return res.json();
}   