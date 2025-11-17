"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import veritasLogo from "../assets/veritas.png";
import indiaSpaceLabLogo from "../assets/indiaspacelab.png";

import defaultImg from "../assets/exp1.png";
import expImg1 from "../assets/exp2.png";
import expImg2 from "../assets/exp3.png";

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
        <section id="experience" className="bg-[#0d1117] px-10 pb-28">
            <motion.h1
                className="font-inter text-5xl mb-10 text-center font-bold text-white"
                initial={{ opacity: 0, y: 80, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                Professional <span className="text-[#caa9d3]">Experience</span>
            </motion.h1>

            <div className="lg:flex  mx-44 items-end    gap-10">

              
                <div className="relative w-full lg:w-[420px] h-[400px] bg-[#0d1117] rounded-2xl overflow-hidden flex items-start justify-end">
                    
                    <img
                        src={activeImage}
                        className="w-60 h-90 transition-all duration-500"
                    />

                    
                </div>

            
                <div className="flex flex-col flex-1 border border-[#2d384d] bg-[#121924] px-5 rounded-2xl p-4 py-6">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="p-4 group transition-all duration-300 hover:bg-[#1a2330] rounded-lg cursor-pointer"
                            onMouseEnter={() => setActiveImage(exp.preview)}
                            onMouseLeave={() => setActiveImage(defaultImg)}
                        >
                            <div className="flex gap-4">

                                <div className="flex flex-col items-center justify-center w-24 gap-4">
                                    <img src={exp.logo} className="w-20 h-12 object-contain" />
                                    <div className="w-[2px] h-14 bg-[#2d384d] mt-2" />
                                </div>

                                <div className="flex flex-col">
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
