"use client";

import { useTheme } from "@/contexts/theme-context";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-8 w-8 relative"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Sun className="h-4 w-4 text-[#F36F20] transition-transform hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-[#F36F20] transition-transform hover:-rotate-12" />
      )}
    </Button>
  );
}
