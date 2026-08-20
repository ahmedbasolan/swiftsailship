"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        relative flex items-center justify-center w-9 h-9 rounded
        border transition-all duration-300 group
        ${isDark
          ? "border-[#C5A47E]/30 bg-[#112236] hover:bg-[#C5A47E]/10 hover:border-[#C5A47E]/60"
          : "border-[#C5A47E]/40 bg-[#F3EFE6] hover:bg-[#C5A47E]/10 hover:border-[#C5A47E]/70"
        }
      `}
    >
      {/* Sun icon — shown in dark mode to indicate "switch to light" */}
      <i
        className={`fa-solid fa-sun text-[#C5A47E] text-sm transition-all duration-300 absolute
          ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`}
      />
      {/* Moon icon — shown in light mode to indicate "switch to dark" */}
      <i
        className={`fa-solid fa-moon text-[#A37F55] text-sm transition-all duration-300 absolute
          ${isDark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
      />
    </button>
  );
}
