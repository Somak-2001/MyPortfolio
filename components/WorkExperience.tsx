'use client';
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard";

const WorkExperience = () => {
  return (
    // For some scrolling effect overflow-hidden used
    <motion.div 
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity :1
    }}
    transition={{
      duration: 1.5
    }}
    className="h-screen flex relative flex-col md:flex-row overflow-hidden max-w-full mx-auto px-10 justify-evenly items-center">
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        Experience
      </h3>
      
      {/* Experience Cards */}
      <div className="w-full flex space-x-5 p-10 overflow-x-scroll snap-x snap-mandatory relative xl:top-10 md:top-16 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
       <ExperienceCard />
       <ExperienceCard />
       <ExperienceCard />
       <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default WorkExperience
