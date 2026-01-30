import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLayoutEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    //setMounted(true);
  }, []);

  useEffect(() => {
  setTimeout(() => setMounted(true), 0);
}, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 border rounded"
    >
      {currentTheme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
//https://darkmode-tailwindcss.hashnode.dev/dark-mode-with-tailwind-v4-and-next-themes
