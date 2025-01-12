"use client"
import { ThemeProvider, useTheme } from "next-themes"

import { MagicCard } from "@/components/ui/magic-card"
export function MagicCardDemo() {
  const { theme = 'light' } = useTheme()
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px] md:h-[400px] px-4 md:px-0">
      <div className="grid grid-rows-3 gap-4">
        <MagicCard
          className="row-span-1 cursor-pointer flex items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          First
        </MagicCard>
        <MagicCard
          className="row-span-2 cursor-pointer flex items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Second
        </MagicCard>
      </div>
      <MagicCard
        className="col-span-1 md:col-span-2 cursor-pointer flex items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Third
      </MagicCard>
    </div>
  )
}
