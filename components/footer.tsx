'use client'

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-bold">Let's Connect</h3>
            <p className="text-muted-foreground">{"Open to collaboration and new opportunities"}</p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/ARDWINNING" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com/in/AlexanderWinning" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:a.winning@ufl.edu" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            {"Built with React & Next.js • "}
            <span className="font-mono">2025</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
