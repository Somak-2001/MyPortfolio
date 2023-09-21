'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Coolpic from '../public/Coolpic.jpeg';
const About = () => {
    return (
        <div className="h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 2
                }}

                // Motion happens while being focused
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}

                // Just Once motion happens
                viewport={{
                    once: true
                }}
            >
                <Image src={Coolpic} alt="Prf Pic" 
                className="-mb-32 md:mb-0  flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 lg:w-[350px] lg:h-[350px] xl:w-[500px] xl:h-[500px]"/>
            </motion.div>
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
            Here is a {" "}<span className="underline decoration-[#F7AB0A]/50"> little</span>{" "}background
            </h4>
            <p className="font-thin">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam incidunt magnam, dignissimos nostrum molestias ab dolorem modi quos laborum. Molestias deserunt perspiciatis provident, ipsum in dolore numquam? In, libero sint.
            </p>
        </div>
        </div>
    )
}

export default About
