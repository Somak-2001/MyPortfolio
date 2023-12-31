'use client';
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
    return (
        <motion.div className='h-screen flex flex-col xl:flex-row md:flex-row relative text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Skills
            </h3>

            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                Hover over a skill for current profieciency
            </h3>

            <div className="grid grid-cols-4 gap-5 relative top-16 md:top-10">
               <Skill />
               <Skill />
               <Skill />
               <Skill />
               <Skill />
               <Skill />
               <Skill />
               <Skill />
               <Skill />
               <Skill />
               <Skill />
               <Skill />
               <Skill />
               <Skill />
            </div>
        </motion.div>
    )
}

export default Skills;
