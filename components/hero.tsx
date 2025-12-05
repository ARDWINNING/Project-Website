'use client'

const TECH_STACK = ['C++', 'Python', 'ARM Assembly', 'Systems Programming']

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden border-b border-border bg-background px-4 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_oklch(0.25_0.05_270)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_oklch(0.20_0.08_200)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="mb-4 font-mono text-xl uppercase tracking-wider text-muted-foreground">
          Systems & Algorithms Portfolio
        </h1>

        
        <h2 className="mb-6 text-balance font-sans text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          {"<Alexander Winning />"}
        </h2>
        

        <p className="mb-12 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {
            "A collection of projects exploring data structures, algorithms, systems programming, and low-level computing across C++, Python, and ARM Assembly."
          }
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {TECH_STACK.map((tech) => (
            <div key={tech} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
