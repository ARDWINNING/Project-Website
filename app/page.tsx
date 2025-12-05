import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { InProgress } from "@/components/in-progress"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <InProgress />
      <Footer />
    </main>
  )
}
