'use client';

import { Cursor,useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePic from '../public/prf.jpg';
import Link from "next/link";

const Hero = () => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, This is Somak",
            "Guys-who-love-coffee.tsx",
            "<ButLovestoCodeMore />"
        ],

        loop: true,
        delaySpeed: 2000,
    });
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius: ["20%","20%","50%","80%","20%"],
    }}
    transition={{
        duration: 2.5
    }}
    // Use h-scrren to snap to the component
    className="h-screen flex flex-col items-center justify-center text-center overflow-hidden space-y-4">
        {/* Circles around */}
      <BackgroundCircles />
      {/* Profile Picture */}
      <Image src={ProfilePic} alt="Profile" className="relative rounded-full h-32 w-32 object-cover"/>
      <div className="z-20">
      {/* Description */}
      <h2 className="text-sm uppercase text-gray-500 py-2 tracking-[15px]">Software Engineer</h2>
      <h1 className="text-5xl lg:text-6xl font-semibold">
        <span className="italic">{text}</span>
        <Cursor cursorColor='#F7AB0A' />
      </h1>
      <div className="pt-5">
        <Link href='#about'>
         <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border[#F7AB0A]/40 hover:text-[#F7AB0A]/40 ">About</button>
        </Link>
        <Link href='#experience'>
         <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border[#F7AB0A]/40 hover:text-[#F7AB0A]/40 ">Experience</button>
        </Link>
        <Link href='#skills'>
         <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border[#F7AB0A]/40 hover:text-[#F7AB0A]/40 ">Skills</button>
        </Link>
        <Link href='#projects'>
         <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border[#F7AB0A]/40 hover:text-[#F7AB0A]/40 ">Projects</button>
        </Link>
      </div>
      </div>
    </motion.div>
  )
}

export default Hero;
