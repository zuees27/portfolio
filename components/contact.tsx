import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Coffee } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Let's Work Together</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If you would like to discuss a project or just say hi, I'm always down to chat.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center p-6 hover:border-primary/50 transition-colors">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground text-sm">Drop me a line anytime</p>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:alex@example.com">Send Email</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:border-primary/50 transition-colors">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-muted-foreground text-sm">Let's connect professionally</p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  Connect
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:border-primary/50 transition-colors">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-chart-3/20 rounded-full flex items-center justify-center mx-auto">
                <Coffee className="h-6 w-6 text-chart-3" />
              </div>
              <h3 className="font-semibold">Coffee Chat</h3>
              <p className="text-muted-foreground text-sm">Let's grab coffee and talk</p>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:alex@example.com?subject=Coffee Chat">Schedule</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center pt-12 border-t border-border">
          <p className="text-muted-foreground">© 2025 Zaw Myo Htet. Built with Next.js and deployed on Vercel.</p>
        </div>
      </div>
    </section>
  )
}
