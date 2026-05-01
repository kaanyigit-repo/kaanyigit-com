"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeControls() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? null;
    const initial: Theme =
      stored ?? (document.documentElement.dataset.theme === "dark" ? "dark" : "light");
    setTheme(initial);
    setMounted(true);
  }, []);

  const updateTheme = (next: Theme) => {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode */
    }
  };

  if (!mounted) return null;

  return (
    <div className="theme-controls" aria-label="Theme controls">
      <button
        type="button"
        className="theme-controls-toggle"
        onClick={() => updateTheme(theme === "dark" ? "light" : "dark")}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
}
