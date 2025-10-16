import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-12 lg:py-20">
      <div className="flex flex-col items-center text-center space-y-12">
        <div className="relative animate-in fade-in-0 zoom-in-50 duration-1000 delay-200">
          <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-2 hover:scale-105 transition-all duration-500 shadow-2xl">
            <img
              src="/pf.jpg"
              alt="Developer coding animation"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent/40 rounded-full animate-ping"></div>
        </div>

        <div className="space-y-8 max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-balance animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-600">
              Zaw Myo Htet
            </h1>
            <h2 className="text-2xl lg:text-3xl text-primary font-medium animate-in fade-in-0 slide-in-from-bottom-6 duration-800 delay-800">
              Web Developer
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1000">
              I build accessible, pixel-perfect digital experiences for the web. Passionate about learning and crafting
              thoughtful user interfaces that blend beautiful design with clean code.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-1200">
            <Button
              asChild
              size="lg"
              className="hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="#projects">
                View My Work
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:scale-110 hover:-translate-y-1 transition-all duration-300 bg-transparent hover:shadow-lg"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-1400">
            <a
              href="https://github.com"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
