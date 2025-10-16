export function About() {
  return (
    <section id="about" className="py-20">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">About</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1 shadow-lg">
                <img
                  src="/animated-coding-developer-typing-on-laptop-with-fl.jpg"
                  alt="Zaw Myo Htet - Web Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
              design with clean code. My favorite work lies at the intersection of design and development, creating
              experiences that not only look great but are built with performance and usability in mind.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I'm a Web Developer at <span className="text-primary font-medium">First-ICT</span>, where I
              contribute to building and maintaining UI components for our platform. I'm focused on learning web
              accessibility standards and best practices to deliver inclusive user experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I've had the opportunity to work on various projects across different environments — from{" "}
              <span className="text-accent font-medium">small agencies</span> to{" "}
              <span className="text-accent font-medium">growing companies</span>. I'm always eager to learn new
              technologies and improve my skills through hands-on projects and collaboration with experienced
              developers.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies I work with</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "PHP",
                  "Laravel",
                  "PostgreSQL",
                  "MySQL",
                  "Tailwind CSS",
                  "HTML/CSS",
                  "AWS",
                  "Docker",
                ].map((tech) => (
                  <div key={tech} className="bg-secondary/50 px-3 py-2 rounded-md text-sm font-medium text-center">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
