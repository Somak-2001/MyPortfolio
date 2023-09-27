import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Avatar from '@/public/footer_avatar.png';

const Home: NextPage = () => {
  return (
    <main className=' bg-slate-700 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60'>
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

      <Link href='#hero'>
        <footer className='sticky w-full bottom-5 cursor-pointe'>
          <div className='flex items-center justify-center'>
            <Image 
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            src={Avatar}
            alt='Footer' 
            width={100}
            height={100}/>
          </div>
        </footer>
      </Link>
    </main>
  )
}

export default Home;