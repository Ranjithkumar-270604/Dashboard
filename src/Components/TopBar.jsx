import { useTheme } from "../Theme/Themes";

export default function TopBar({ viewMode, setViewMode }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="topbar">
      <h1 className="topbar-title">Dashboard</h1>

      
      <div className="topbar-controls">
        <div className="toggle-group">
          <button
            className={`toggle-btn ${viewMode === "monthly" ? "active" : ""}`}
            onClick={() => setViewMode("monthly")}
          >
            Monthly
          </button>
          <button
            className={`toggle-btn ${viewMode === "quarterly" ? "active" : ""}`}
            onClick={() => setViewMode("quarterly")}
          >
            Quarterly
          </button>
        </div>

        <span className="date-text">
          {viewMode === "monthly"
            ? "01 Jan, 2024 - 31 Jan, 2024"
            : "01 Jan, 2024 - 31 Mar, 2024"}
        </span>
      </div>

      
      <div className="topbar-right">
        <button
          className="theme-btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}
