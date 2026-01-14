"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { LanguageSwitcher } from "@/components/language-switcher"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Leaf, TrendingUp, Users, AlertCircle } from "lucide-react"
import Link from "next/link"

type Language = "en" | "ny"

const translations = {
  en: {
    title: "Farmer Feedback Dashboard",
    totalSubmissions: "Total Submissions",
    activeRegions: "Active Regions",
    topChallenges: "Top Challenges",
    severityBreakdown: "Severity Breakdown",
    challenges_over_time: "Challenges Over Time",
    crop_distribution: "Crop Distribution",
    maize: "Maize",
    soybean: "Soybean",
    tobacco: "Tobacco",
    groundnut: "Groundnut",
    challenges: {
      pest: "Pest Infestation",
      drought: "Drought",
      disease: "Disease",
      soil: "Soil Issues",
      water: "Water Management",
    },
  },
  ny: {
    title: "Dashboard ya Mafumufumu",
    totalSubmissions: "Chiwerengero cha Mafumufumu",
    activeRegions: "Malo Omwe Ali Omwe",
    topChallenges: "Zaka Zazikuluzikulu",
    severityBreakdown: "Mgawu wa Mphamvu",
    challenges_over_time: "Zaka Nthawi Zonse",
    crop_distribution: "Kusonkhana kwa Mbewu",
    maize: "Chimanga",
    soybean: "Soya",
    tobacco: "Tobacco",
    groundnut: "Mtedze",
    challenges: {
      pest: "Insekiti",
      drought: "Donda",
      disease: "Matenda",
      soil: "Mavuto a Nthaka",
      water: "Kumangiriza Madzi",
    },
  },
}

const mockData = {
  submissions: [
    { month: "Jan", count: 45 },
    { month: "Feb", count: 52 },
    { month: "Mar", count: 48 },
    { month: "Apr", count: 61 },
    { month: "May", count: 55 },
    { month: "Jun", count: 67 },
  ],
  cropDistribution: [
    { name: "Maize", value: 35 },
    { name: "Soybean", value: 25 },
    { name: "Tobacco", value: 20 },
    { name: "Groundnut", value: 20 },
  ],
  challenges: [
    { name: "Pest Infestation", count: 48 },
    { name: "Drought", count: 35 },
    { name: "Disease", count: 32 },
    { name: "Soil Issues", count: 28 },
    { name: "Water Management", count: 22 },
  ],
  severity: [
    { name: "Low", value: 30 },
    { name: "Medium", value: 50 },
    { name: "High", value: 20 },
  ],
}

const COLORS = ["#6b7d3d", "#8b9f4a", "#a5b857", "#bfd264"]
const SEVERITY_COLORS = ["#a5b857", "#f5b547", "#d97706"]

export default function Dashboard() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">{t.title}</h2>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{t.totalSubmissions}</p>
                <p className="text-3xl font-bold text-foreground">328</p>
              </div>
              <Users className="w-8 h-8 text-primary opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{t.activeRegions}</p>
                <p className="text-3xl font-bold text-foreground">12</p>
              </div>
              <TrendingUp className="w-8 h-8 text-secondary opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Avg. Severity</p>
                <p className="text-3xl font-bold text-foreground">Medium</p>
              </div>
              <AlertCircle className="w-8 h-8 text-accent opacity-20" />
            </div>
          </Card>

          <Card className="p-6 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Success Rate</p>
                <p className="text-3xl font-bold text-foreground">94%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600 opacity-20" />
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Submissions Over Time */}
          <Card className="p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">{t.challenges_over_time}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockData.submissions}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip contentStyle={{ backgroundColor: "var(--color-card)", border: "var(--color-border)" }} />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="var(--color-primary)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-primary)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Crop Distribution */}
          <Card className="p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">{t.crop_distribution}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockData.cropDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {mockData.cropDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "var(--color-card)", border: "var(--color-border)" }} />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Top Challenges */}
          <Card className="p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">{t.topChallenges}</h3>
            <div className="space-y-4">
              {mockData.challenges.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{item.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${(item.count / 50) * 100}%` }} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Severity Breakdown */}
          <Card className="p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">{t.severityBreakdown}</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={mockData.severity}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {mockData.severity.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={SEVERITY_COLORS[index % SEVERITY_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "var(--color-card)", border: "var(--color-border)" }} />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </main>
    </div>
  )
}
