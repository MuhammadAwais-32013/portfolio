"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: "dark" | "light";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    if (saved && (saved === "dark" || saved === "light" || saved === "system")) {
      setThemeState(saved);
    } else {
      setThemeState("dark"); // Default to rich dark mode
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let target: "dark" | "light" = "dark";
    if (theme === "system") {
      target = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else {
      target = theme;
    }

    setResolvedTheme(target);
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(target);
    root.setAttribute("data-theme", target);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: "dark" as Theme,
      resolvedTheme: "dark" as const,
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return context;
}
