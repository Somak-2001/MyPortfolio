'use client';
import { motion } from "framer-motion";
import Image from "next/image";

type SkillProp = {
    diretionLeft?: boolean
}

const Skill = ({ diretionLeft }: SkillProp ) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
      initial={{
        x: diretionLeft ? -200 : 200,
        opacity: 0,
      }}
    whileInView={{
        opacity: 1, x: 0
    }}
    transition={{
        duration: 1
    }}>
        <Image src={'https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png'} alt="Skill"
        className="rounded-full border border-gray-500 object-cover w-24 h-24  filter group-hover:grayscale transition duration-300 ease-in-out"
        width={100}
        height={100}/>
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24  rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill;
