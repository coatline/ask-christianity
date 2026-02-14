import { useEffect, useState } from "react";
import { themes } from "./themes";
import './NavigationBar.css'

export default function NavigationBar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const selectedTheme = themes[theme] || themes.dark;

    Object.entries(selectedTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="top-nav">
      <div className="theme-selector">
        <select
          id="theme-select"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          {/* Logic: Generate an option for every theme in our object */}
          {Object.keys(themes).map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}
