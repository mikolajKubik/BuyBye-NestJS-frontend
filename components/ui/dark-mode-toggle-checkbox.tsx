"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

function CheckboxDemo() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure the component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  if (!mounted) {
    // Avoid rendering until mounted to prevent mismatch
    return null;
  }

  return (
    <div className="flex flex-col justify-center">
      <button
        onClick={cycleTheme}
        className="group relative inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-input bg-background text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-opacity-70"
        aria-label={`Switch theme (current: ${theme})`}
      >
        <Moon
          size={16}
          strokeWidth={2}
          className={`absolute transition-all ${
            theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          aria-hidden="true"
        />
        <Sun
          size={16}
          strokeWidth={2}
          className={`absolute transition-all ${
            theme === "light" || !theme ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          aria-hidden="true"
        />
        <SunMoon
          size={16}
          strokeWidth={2}
          className={`absolute transition-all ${
            theme === "system" ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

export { CheckboxDemo };