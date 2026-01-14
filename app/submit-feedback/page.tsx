"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LanguageSwitcher } from "@/components/language-switcher"
import { CheckCircle2, Leaf } from "lucide-react"
import Link from "next/link"

type Language = "en" | "ny"

const translations = {
  en: {
    title: "Submit Your Crop Challenge",
    description:
      "Help us understand your farming challenges. Your feedback helps train AI models to better support farmers.",
    farmername: "Farmer Name",
    region: "Region/District",
    crop: "Crop Type",
    challenge: "What challenge are you facing?",
    description_label: "Detailed Description",
    severity: "Severity Level",
    submit: "Submit Feedback",
    success: "Thank you!",
    successMsg: "Your feedback has been submitted and will help improve our AI models.",
    low: "Low",
    medium: "Medium",
    high: "High",
    placeholder_name: "Your name",
    placeholder_region: "e.g., Lilongwe, Blantyre",
    placeholder_crop: "e.g., Maize, Soybean, Tobacco",
    placeholder_challenge: "e.g., Pest infestation, Drought, Disease",
    placeholder_description: "Describe your challenge in detail...",
  },
  ny: {
    title: "Lankhulani Zaka Zanu",
    description: "Titiyeni ife kumvetsa zaka zanu. Mafumufumu anu amathandiza kuphunzitsa ma AI kuthandiza amalimi.",
    farmername: "Dzina la Mlimi",
    region: "Chigawo/Malo",
    crop: "Mtundu wa Mbewu",
    challenge: "Zaka limene mwakumana nalo?",
    description_label: "Kufotokoza Kwa Munda",
    severity: "Mphamvu ya Vuto",
    submit: "Lankhulani Mafumufumu",
    success: "Zikomo!",
    successMsg: "Mafumufumu anu atapokekwa ndipo atshandiza kusunga ma AI.",
    low: "Pang'ono",
    medium: "Pakatikati",
    high: "Kwambiri",
    placeholder_name: "Dzina lanu",
    placeholder_region: "mwachitsanzo: Lilongwe, Blantyre",
    placeholder_crop: "mwachitsanzo: Chimanga, Soya, Tobacco",
    placeholder_challenge: "mwachitsanzo: Insekiti, Donda, Matenda",
    placeholder_description: "Fotokozani zaka zanu kwa munda...",
  },
}

export default function SubmitFeedback() {
  const [language, setLanguage] = useState<Language>("en")
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    region: "",
    crop: "",
    challenge: "",
    description: "",
    severity: "medium",
  })

  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted feedback:", { ...formData, language })
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", region: "", crop: "", challenge: "", description: "", severity: "medium" })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-primary">AI Farmer</h1>
          </Link>
          <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">{t.title}</h2>
          <p className="text-muted-foreground">{t.description}</p>
        </div>

        <Card className="p-8 border border-border shadow-sm">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">{t.success}</h3>
              <p className="text-muted-foreground">{t.successMsg}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Farmer Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t.farmername}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.placeholder_name}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t.region}</label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  placeholder={t.placeholder_region}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Crop Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t.crop}</label>
                <input
                  type="text"
                  name="crop"
                  value={formData.crop}
                  onChange={handleChange}
                  placeholder={t.placeholder_crop}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Challenge */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t.challenge}</label>
                <input
                  type="text"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  placeholder={t.placeholder_challenge}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Severity */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t.severity}</label>
                <select
                  name="severity"
                  value={formData.severity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="low">{t.low}</option>
                  <option value="medium">{t.medium}</option>
                  <option value="high">{t.high}</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t.description_label}</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder={t.placeholder_description}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {t.submit}
              </Button>
            </form>
          )}
        </Card>
      </main>
    </div>
  )
}
