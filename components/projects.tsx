'use client'

import { ProjectCard } from "@/components/project-card"
import { cppProjects, pythonProjects, assemblyProjects } from "@/lib/projects"

export function Projects() {
  return (
    <section className="border-b border-border bg-background px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance font-sans text-4xl font-bold tracking-tight md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            {"Exploring computer science fundamentals through hands-on implementations"}
          </p>
        </div>

        {/* C++ Projects */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <h3 className="text-2xl font-bold">C++ Projects</h3>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              {cppProjects.length}
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cppProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* Python Projects */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <h3 className="text-2xl font-bold">Python Projects</h3>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              {pythonProjects.length}
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pythonProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* ARM Assembly Projects */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <h3 className="text-2xl font-bold">ARM Assembly Projects</h3>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              {assemblyProjects.length}
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {assemblyProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
