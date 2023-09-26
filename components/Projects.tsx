'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Netflix from '@/public/NetflixSymbol.png';
const Projects = () => {
    const projects = [1, 2, 3, 4, 5];
    return (
        <div className="h-screen flex flex-col xl:flex-row md:flex-row relative text-left max-w-full min-h-screen justify-evenly mx-auto items-center
    z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Skills
            </h3>

            {/* Projects */}
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 h-screen scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60">
                {projects.map((project,idx) => {
                    return (
                        <motion.div 
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.5
                        }}
                        className="w-scrren flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 ">
                            <motion.div
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 1.5
                            }}>
                            <Image src={Netflix} width={100} height={100} alt="Project" />
                            </motion.div>
                            <div className="space-y-10 max-w-6xl px-0 md:px-10">
                                <h4 className="text-3xl md:text-4xl font-semibold text-center">
                                    <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {idx+1} of {projects.length} UPS clone
                                    </span>
                                </h4>

                                <p className="text-base md:text-lg text-center  md:text-left w-[500px] md:w-[800px] lg:w-full px-5">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis totam in aliquam dicta ab hic assumenda. Eveniet magni ad ut consectetur, earum doloremque exercitationem. Modi dolorum minus soluta facere vel.
                                </p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[300px] -skew-y-12">
            </div>
        </div>
    )
}

export default Projects;
