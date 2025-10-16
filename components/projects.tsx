import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [

    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js, featuring smooth animations and optimized performance.",
      image: "/first-ict.png",
      technologies: ["Next.js", "Tailwind CSS", "Vercel" , "Laravel"],
      demo: "https://first-ict.com/",
    },
  ]

  return (
    <section id="projects" className="py-12">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Projects</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 min-h-[400px] md:min-h-[380px]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-secondary/50 px-3 py-1 rounded-md text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">

                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
