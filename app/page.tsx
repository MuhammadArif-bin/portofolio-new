import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Timeline } from '@/components/timeline'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="min-h-screen bg-black pt-20">
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
