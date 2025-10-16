import { Navigation } from "@/components/navigation"
import { Contact } from "@/components/contact"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Contact />
      </div>
    </main>
  )
}
