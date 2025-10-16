import { ExternalLink } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      period: "2024 — Present",
      title: "Web Developer", // Updated from Senior Full-Stack Engineer
      company: "First-ICT",
      description:
        "Contribute to building and maintaining frontend components used across First-ICT's platform. Work with cross-functional teams to implement user interfaces and learn best practices in web accessibility and performance optimization.",
      technologies: ["JavaScript", "TypeScript", "React", "CSS"],
    },

  ]

  return (
    <section id="experience" className="py-12">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Experience</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                </div>

                <div className="lg:col-span-3 space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {exp.title} · {exp.company}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
