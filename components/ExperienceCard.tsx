'use client';
import { motion } from "framer-motion";
import Image from "next/image";

import CEOExp from '@/public/CEOExp.jpeg';

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[400px] md:w-[450px] md:h-[500px] xl:w-[500px] xl:h-[500px] snap-center bg-zinc-800 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden cursor-pointer hover:shadow-lg p-2 md:pb-14">
      <motion.div
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{
        duration: 1.2
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      // viewport={{ once: true }}
      >
        <Image src={CEOExp}
        className="h-32 w-32 rounded-full object-cover object-center xl:w-[150px] xl:h-[150px]"
         alt='Experience'/>
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="md:text-xl lg:text-4xl font-light">CEO of PARAM</h4>
        <p className="font-bold md:text-xl lg:text-2xl mt-1">PARAM</p>
        {/* Tech Card */}
        <div className="flex space-x-2 my-2 md:my-0 lg:my-2">
          <Image className="h-10 w-10 rounded-full" width={100} height={100} src='https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png' alt="Card Image"/>
          <Image className="h-10 w-10 rounded-full" width={100} height={100} src='https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png' alt="Card Image"/>
          <Image className="h-10 w-10 rounded-full" width={100} height={100} src='https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png' alt="Card Image"/>
        </div>
        <p className="uppercase py-5 text-gray-400">Started work...... Ended-</p>

        <ul className="list-disc space-y-0 md:space-y-2 lg:space-y-4 ml-5 text-base lg:text-lg">
            <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard;
