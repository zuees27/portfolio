import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <About />
      </div>
    </main>
  )
}
