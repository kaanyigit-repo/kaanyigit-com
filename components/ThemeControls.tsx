"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
type Accent = "ember" | "crimson" | "olive" | "cobalt" | "mono";

const ACCENTS: { id: Accent; label: string; hex: string }[] = [
  { id: "ember", label: "Ember", hex: "#c87639" },
  { id: "crimson", label: "Crimson", hex: "#a23232" },
  { id: "olive", label: "Olive", hex: "#7d8a3e" },
  { id: "cobalt", label: "Cobalt", hex: "#3a5fa8" },
  { id: "mono", label: "Mono", hex: "#1a1612" },
];

export function ThemeControls() {
  const [theme, setTheme] = useState<Theme>("light");
  const [accent, setAccent] = useState<Accent>("ember");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = (localStorage.getItem("theme") as Theme | null) ?? null;
    const storedAccent = (localStorage.getItem("accent") as Accent | null) ?? null;
    const initialTheme: Theme =
      storedTheme ?? (document.documentElement.dataset.theme === "dark" ? "dark" : "light");
    const initialAccent: Accent =
      storedAccent ??
      ((document.documentElement.dataset.accent as Accent | undefined) ?? "ember");
    setTheme(initialTheme);
    setAccent(initialAccent);
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

  const updateAccent = (next: Accent) => {
    setAccent(next);
    document.documentElement.dataset.accent = next;
    try {
      localStorage.setItem("accent", next);
    } catch {
      /* private mode */
    }
  };

  if (!mounted) return null;

  return (
    <div className="theme-controls" aria-label="Theme controls">
      <div className="theme-controls-accents" role="group" aria-label="Accent color">
        {ACCENTS.map((a) => (
          <button
            key={a.id}
            type="button"
            className={
              "theme-controls-swatch" + (accent === a.id ? " is-active" : "")
            }
            style={{ background: a.hex }}
            aria-label={a.label}
            aria-pressed={accent === a.id}
            onClick={() => updateAccent(a.id)}
            title={a.label}
          />
        ))}
      </div>
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
