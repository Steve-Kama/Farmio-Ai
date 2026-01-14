"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  language: "en" | "ny"
  onLanguageChange: (lang: "en" | "ny") => void
}

export function LanguageSwitcher({ language, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex gap-2 items-center">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => onLanguageChange("en")}
        className="text-xs"
      >
        English
      </Button>
      <Button
        variant={language === "ny" ? "default" : "ghost"}
        size="sm"
        onClick={() => onLanguageChange("ny")}
        className="text-xs"
      >
        Chichewa
      </Button>
    </div>
  )
}
