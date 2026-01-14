import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Leaf, BarChart3, Lightbulb, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-primary">AI Farmer</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/submit-feedback" className="text-sm text-foreground hover:text-primary transition-colors">
              Submit Feedback
            </Link>
            <Link href="/dashboard" className="text-sm text-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/insights" className="text-sm text-foreground hover:text-primary transition-colors">
              Insights
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-balance text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Empower Your Farming with AI Insights
          </h2>
          <p className="text-balance text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Share your crop challenges and get personalized recommendations powered by machine learning, in Chichewa and
            English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/submit-feedback">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Submit Feedback Now
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline">
                View Dashboard
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-card py-16 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 border border-border hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground">Share Challenges</h4>
                  <p className="text-sm text-muted-foreground">
                    Tell us about your crop issues in your preferred language
                  </p>
                </div>
              </Card>

              <Card className="p-6 border border-border hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground">Multilingual Support</h4>
                  <p className="text-sm text-muted-foreground">Get responses in Chichewa or English</p>
                </div>
              </Card>

              <Card className="p-6 border border-border hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground">Track Patterns</h4>
                  <p className="text-sm text-muted-foreground">View aggregated insights from all farmers</p>
                </div>
              </Card>

              <Card className="p-6 border border-border hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground">Get Recommendations</h4>
                  <p className="text-sm text-muted-foreground">Receive AI-powered solutions for your problems</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h3>
            <p className="text-lg mb-8 opacity-90">
              Start sharing your challenges today and get instant AI-driven recommendations
            </p>
            <Link href="/submit-feedback">
              <Button size="lg" variant="secondary" className="bg-white hover:bg-white/90 text-primary">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>© 2025 AI Farmer Mini-Lab. Empowering farmers through technology.</p>
        </div>
      </footer>
    </div>
  )
}
