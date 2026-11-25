"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

function applyTheme(t: Theme) {
  document.documentElement.classList.toggle("dark", t === "dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read saved preference from localStorage, default to light
    const saved = localStorage.getItem("swift-theme") as Theme | null;
    const initial = saved === "dark" ? "dark" : "light";
    // Syncing from localStorage, which only exists after hydration, is what
    // effects are for; a lazy initial state would mismatch the server render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("swift-theme", next);
      applyTheme(next);
      return next;
    });
  };

  // Prevent flash: render children only once mounted (theme is known)
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
