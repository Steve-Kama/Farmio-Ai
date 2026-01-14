"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { Leaf, Lightbulb, TrendingUp, AlertTriangle } from "lucide-react"
import Link from "next/link"

type Language = "en" | "ny"

const translations = {
  en: {
    title: "AI-Powered Insights & Recommendations",
    description: "Actionable insights generated from farmer feedback data",
    insight1_title: "Pest Management Strategy",
    insight1_desc:
      "Based on 48 reports, pest infestation is the most common challenge. Recommended integrated pest management (IPM) techniques:",
    insight1_tips: [
      "Crop rotation every 2 seasons",
      "Use of certified seeds resistant to local pests",
      "Early detection through regular scouting",
      "Organic pesticide options for sustainable farming",
    ],
    insight2_title: "Drought Resilience",
    insight2_desc: "With 35 drought-related reports, farmers are advised to:",
    insight2_tips: [
      "Implement water harvesting techniques",
      "Use drought-resistant crop varieties",
      "Practice mulching to retain soil moisture",
      "Develop micro-irrigation systems",
    ],
    insight3_title: "Disease Prevention",
    insight3_desc: "32 disease reports indicate a need for preventive measures:",
    insight3_tips: [
      "Maintain proper field hygiene",
      "Plant-to-plant spacing recommendations",
      "Regular monitoring and early intervention",
      "Use disease-resistant varieties",
    ],
    insight4_title: "Soil Health Improvement",
    insight4_desc: "28 soil-related issues suggest these improvements:",
    insight4_tips: [
      "Regular soil testing (annually)",
      "Composting and organic matter addition",
      "Cover cropping for soil enrichment",
      "Reduced tillage to preserve soil structure",
    ],
    trend_analysis: "Trend Analysis",
    seasonal_patterns:
      "Based on submission patterns, pest and drought challenges peak during dry seasons. Plan interventions accordingly.",
  },
  ny: {
    title: "Kuwona kwa AI ndi Malangizo",
    description: "Kuwona komwe kumachitika kuchokera pa mafumufumu a amalimi",
    insight1_title: "Njira ya Kuwombera Insekiti",
    insight1_desc: "Kutengera zilembo 48, insekiti ndi mvuto wodziwika bwino. Malangizo:",
    insight1_tips: [
      "Kusinthukiridwa kwa mbewu nthawi iliyonse",
      "Kugwiritsa ntchito mbewu zolimidwa kuzitsatsa insekiti",
      "Kuwona nthawi yoyamba",
      "Zoowonera zabhabhalitsimba",
    ],
    insight2_title: "Kulamula Donda",
    insight2_desc: "Ndi zilembo 35 zochepa, amalimi amalangizidwa:",
    insight2_tips: [
      "Kusunga madzi",
      "Kugwiritsa ntchito mbewu zolimidwa kudumpha",
      "Kuikira udzu",
      "Kuyang'anirako madzi",
    ],
    insight3_title: "Kuwalikilani Matenda",
    insight3_desc: "Zilembo 32 zimayeseza malangizo oletsa:",
    insight3_tips: [
      "Kusunga nthaka koyenera",
      "Kuikira mbewu pomwe",
      "Kuwona pafupipafupi",
      "Kugwiritsa ntchito mbewu zolimidwa kulipira",
    ],
    insight4_title: "Kutsatsanira Nthaka",
    insight4_desc: "Zilembo 28 zimayeseza izi:",
    insight4_tips: [
      "Kuyesa nthaka nthawi iliyonse",
      "Kupsinjira ndi chilengedwe",
      "Kuima mbewu zolimidwa",
      "Kuletsa kuophwanya nthaka",
    ],
    trend_analysis: "Kuwona Nthawi Zonse",
    seasonal_patterns:
      "Kutengera mafumufumu, insekiti ndi donda zimachuluka masikidwe akudonda. Sinthani njira zenizeni.",
  },
}

export default function Insights() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  const insights = [
    {
      icon: AlertTriangle,
      title: t.insight1_title,
      description: t.insight1_desc,
      tips: t.insight1_tips,
      color: "text-orange-600",
    },
    {
      icon: Lightbulb,
      title: t.insight2_title,
      description: t.insight2_desc,
      tips: t.insight2_tips,
      color: "text-yellow-600",
    },
    {
      icon: TrendingUp,
      title: t.insight3_title,
      description: t.insight3_desc,
      tips: t.insight3_tips,
      color: "text-green-600",
    },
    {
      icon: Leaf,
      title: t.insight4_title,
      description: t.insight4_desc,
      tips: t.insight4_tips,
      color: "text-green-700",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-primary">AI Farmer</h1>
          </Link>
          <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">{t.title}</h2>
          <p className="text-lg text-muted-foreground">{t.description}</p>
        </div>

        {/* Insights Cards */}
        <div className="grid gap-6 mb-12">
          {insights.map((insight, index) => {
            const IconComponent = insight.icon
            return (
              <Card key={index} className="p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <IconComponent className={`w-8 h-8 ${insight.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{insight.title}</h3>
                    <p className="text-muted-foreground mb-4">{insight.description}</p>
                    <ul className="space-y-2">
                      {insight.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-3">
                          <span className="text-primary font-bold text-lg">•</span>
                          <span className="text-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Trend Analysis */}
        <Card className="p-8 border border-primary bg-primary/5">
          <h3 className="text-2xl font-bold text-foreground mb-4">{t.trend_analysis}</h3>
          <p className="text-muted-foreground mb-4">{t.seasonal_patterns}</p>
          <Link href="/submit-feedback">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Share Your Feedback</Button>
          </Link>
        </Card>
      </main>
    </div>
  )
}
