"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import veritasLogo from "../assets/veritas.png";
import indiaSpaceLabLogo from "../assets/indiaspacelab.png";

import defaultImg from "../assets/exp1.png";
import expImg1 from "../assets/exp2.png";
import expImg2 from "../assets/exp3.png";
import Arrow from "../assets/arrow.svg";
export const experiences = [
    {
        company: "Veritas Soft Solutions Pvt. Ltd.",
        role: "Full Stack Intern",
        duration: "Feb 2025 – Apr 2025",
        description:
            "A software development company specializing in scalable web and enterprise solutions.",
        logo: veritasLogo,
        preview: expImg1
    },
    {
        company: "India Space Lab",
        role: "Space Tech Intern",
        duration: "Dec 2024 – Jan 2025",
        description:
            "An organization building drone and satellite systems for research and innovation.",
        logo: indiaSpaceLabLogo,
        preview: expImg2
    }
];

export default function Experience() {
    const [activeImage, setActiveImage] = useState(defaultImg);

    return (
        <section id="work" className="bg-[#0d1117] px-4 md:px-10 pb-10 md:pb-20">
            <motion.h1
                className="font-inter text-3xl md:text-5xl mb-10 text-center font-bold text-white z-10"
                initial={{ opacity: 0, y: 80, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                Professional <span className="text-[#caa9d3]">Experience</span>
            </motion.h1>

            <div className="lg:flex  md:mx-44   gap-10">

                <div className="relative w-full lg:w-[420px] h-[400px] bg-[#0d1117] rounded-2xl flex items-start justify-end">

                    <p className="border border-gray-800 px-3 py-2 absolute right-63 top-11 font-inter text-sm text-gray-400 rounded-full z-20 items-center">
                        Touch Me
                    </p>

                    <img
                        src={Arrow}
                        className="absolute right-[215px] top-[70px] w-24 h-24 pointer-events-none text-white  scale-x-[-1] rotate-200"
                        alt="arrow"
                    />
                    <a href="https://www.linkedin.com/in/saurabhshisode" target="_blank" rel="noopener noreferrer">
                    <img
                        src={activeImage}
                        className="w-65 h-95 transition-all duration-500 md:mt-4 md:mr-4"
                        alt="preview"
                    />
                    </a>

                </div>




                <div className="flex flex-col flex-1 border border-[#2d384d] bg-[#121924] px-5 rounded-2xl p-4 py-6">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="p-2 md:p-4 group transition-all duration-300 hover:bg-[#1a2330] rounded-lg cursor-pointer"
                            onMouseEnter={() => setActiveImage(exp.preview)}
                            onMouseLeave={() => setActiveImage(defaultImg)}
                        >
                            <div className="flex gap-4">

                                <div className="flex flex-col items-center justify-center w-24 gap-4 font-inter">
                                    <img src={exp.logo} className="w-20 h-12 object-contain" />
                                    <div className="w-[2px] h-14 bg-[#2d384d] mt-2" />
                                </div>

                                <div className="flex flex-col font-inter">
                                    <h2 className="text-lg font-bold text-white">{exp.company}</h2>
                                    <p className="text-sm font-medium text-gray-300">{exp.role}</p>
                                    <p className="text-sm text-gray-500">{exp.duration}</p>

                                    <p className="text-gray-400 text-sm mt-4 group-hover:text-white transition-all duration-300">
                                        {exp.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
