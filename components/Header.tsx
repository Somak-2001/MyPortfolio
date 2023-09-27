'use client';

import { useState, useEffect } from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
const Header = () => {

  // This is done to avoid hydration error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(()=>{
    setIsMounted(true);
  },[]);

  if(!isMounted){
    return null;
  }

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {/* Social Icons */}
      {/* Motion is used to create an animation on social icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}

        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}

        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center">
        <SocialIcon className="cursor-pointer" url="https://github.com/Somak-2001" fgColor="gray" bgColor="transparent" />
        <SocialIcon className="cursor-pointer" url="https://www.linkedin.com/in/somak-poddar-4961281b7/" fgColor="gray" bgColor="transparent" />
        <SocialIcon className="cursor-pointer" url="https://www.instagram.com/somakpoddar/" fgColor="gray" bgColor="transparent" />
      </motion.div>
      {/* Email */}
      <Link href='#contact'>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}

          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}

          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center text-gray-300">
          <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
          <p className="text-sm mr-2 md:text-lg md:mr-0">Get in touch</p>
        </motion.div>
      </Link>
    </header>
  )
}

export default Header;
