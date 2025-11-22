"use client";

import { motion } from "framer-motion";
import { Volleyball, Clapperboard, Gamepad2 } from "lucide-react";

export default function ExtraCurricular() {
    return (
        <section className="bg-[#0d1117] text-white pb-10 md:pb-20 font-inter">

            <motion.h1
                className="text-center text-3xl lg:text-4xl font-bold mb-10"
                initial={{ opacity: 0, y: 80, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                Beyond <span className="text-[#caa9d3]">Studies</span>
            </motion.h1>

            <div className="px-4 md:px-10 lg:px-54">
                <div className="grid grid-cols-6 grid-rows-5 gap-4">

                    <div
                        className="col-span-3 row-span-3 bg-[#121924] border border-[#2d384d] rounded-2xl p-8 flex gap-6 hover:bg-[#1a2330] transition-all duration-300 group relative overflow-hidden text-left justify-center items-center"
                    >

                        <Volleyball
                            size={200}
                            className="text-gray-700 absolute left-[-80px] opacity-40 group-hover:opacity-90 transition-all duration-500"
                        />


                        <div className="md:ml-28 flex flex-col  gap-3 z-10 md:text-left">
                            <h2 className=" text-3xl md:text-4xl lg:text-6xl font-bold font-grotesk">Volleyball</h2>

                            <p
                                className="text-gray-300 text-sm leading-relaxed opacity-0 
      -translate-x-10 group-hover:opacity-100 group-hover:translate-x-2
      transition-all duration-500 ease-out font-inter text-left"
                            >
                                Aarambh ‘22 Volleyball runner-up.
                            </p>
                        </div>
                    </div>




                    <div
                        className="col-span-3 row-span-3 col-start-4 bg-[#121924] border border-[#2d384d] rounded-2xl p-8 flex gap-6 hover:bg-[#1a2330] transition-all duration-300 group items-center relative overflow-hidden justify-center"
                    >
                        
                        <Gamepad2
                            size={200}
                            className="text-gray-700 absolute right-[-90px] opacity-40 group-hover:opacity-90 transition-all duration-500"
                        />

                        
                        <div className="md:mr-24 flex flex-col  gap-3 z-20">
                            <h2 className=" text-3xl md:text-4xl lg:text-6xl font-bold font-grotesk">Gaming</h2>

                            <p
                                className="text-gray-300 text-sm leading-relaxed opacity-0 
      -translate-x-10 group-hover:opacity-100 group-hover:translate-x-2
      transition-all duration-500 ease-out font-inter text-left"
                            >
                                Mail me your Valorant ID or take mine - 
                            </p>
                        </div>
                    </div>



                    <div
                        className="col-span-6 row-span-2 row-start-4 bg-[#121924] border border-[#2d384d] rounded-2xl p-8 flex gap-6 hover:bg-[#1a2330] transition-all duration-300 group items-center justify-center relative overflow-hidden"
                    >
                        
                        <Clapperboard
                            size={180}
                            className="text-gray-700 absolute  -bottom-[100px] opacity-40 group-hover:opacity-90 transition-all duration-500"
                        />

                     
                        <div className="flex flex-col text-center gap-3">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-grotesk mb-2">Video Editing</h2>

                            <p
                                className="text-gray-300 text-sm leading-relaxed opacity-0 
      translate-y-10 group-hover:opacity-100 group-hover:translate-y-2
      transition-all duration-500 ease-out font-inter"
                            >
                                Oversaw media production for D2C Igniters Club, as Media & Photography Co-Lead.
                            </p>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
}
