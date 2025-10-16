"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send, User, MessageSquare } from "lucide-react"
import { submitContactForm } from "@/lib/nodemailer"
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault() // Prevent full-page reload
    setIsSubmitting(true)
    setMessage("")

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const result = await submitContactForm(formData)
      console.log(result);  
      if (result.success) {
        setMessage("✅ Thank you! Your message has been sent successfully.")
        form.reset()
      } else if (result.error) {
        setMessage(`⚠️ ${result.error}`)
      } else {
        setMessage("⚠️ Sorry, there was an unexpected error sending your message. Please try again.")
      }
    } catch (error: any) {
      if (error?.message) {
        setMessage(`⚠️ Error: ${error.message}`)
      } else {
        setMessage("⚠️ An unknown error occurred. Please check your internet connection and try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Send me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact Me
          </CardTitle>
          <CardDescription>Fill out the form below and I'll respond within 24 hours.</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or how I can help you..."
                rows={6}
                required
                className="bg-background resize-none"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>

            {message && (
              <div
                className={`p-4 rounded-lg text-sm ${
                  message.includes("Thank you")
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
