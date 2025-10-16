import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Hero />
        <Experience />
        <Projects />
        <ContactForm />
      </div>
    </main>
  )
}
