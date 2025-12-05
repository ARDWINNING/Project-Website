'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { inProgressProjects } from "@/lib/projects"

export function InProgress() {
  return (
    <section className="bg-muted/30 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            In Progress
          </div>
          <h2 className="mb-4 text-balance font-sans text-4xl font-bold tracking-tight md:text-5xl">Current Work</h2>
          <p className="text-pretty text-lg text-muted-foreground">{"Projects currently in active development"}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {inProgressProjects.map((project) => (
            <a
              key={project.title}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={project.githubUrl ? "block" : ""}
            >
              <Card className={"border-2 border-dashed transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer"}>
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-4xl">{project.icon}</span>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Progress</div>
                      <div className="text-lg font-bold text-primary">{project.progress}%</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                  {/* Progress bar */}
                  <div className="mb-4 h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
