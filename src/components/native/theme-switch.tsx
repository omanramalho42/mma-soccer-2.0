"use client"

import React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { BeerIcon, Vegan } from "lucide-react"
import { Button } from "../ui/button"

const iconTheme: any = {
  choop: "🍺",
  weed: "🌱",
  dark: "🌚",
  light: "🌞",
}

export default function ThemeSwitch() {
  const { setTheme, themes } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <BeerIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all choop:rotate-0 choop:scale-100" />
          <Vegan className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all weed:rotate-0 weed:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme, idx) => {
          return (
            <DropdownMenuItem key={idx} onClick={() => setTheme(theme)}>
              {iconTheme[theme] ?? "💾"} {" "} { theme } 
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
