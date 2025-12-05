'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <Card className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
      <CardHeader>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-4xl">{project.icon}</span>
          <div className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {project.category}
          </div>
        </div>
        <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  if (!project.githubUrl) {
    return content
  }

  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {content}
    </a>
  )
}
