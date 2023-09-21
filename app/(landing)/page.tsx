import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' bg-slate-700 text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      {/* Header Section */}
      <Header />

      {/* Hero Component (Typewriter Motion) */}
      {/* Snap allows to snap the circle accross y axis */}
      {/* snap-center */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About Section */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
    </main>
  )
}
