"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
import Glide from "../assets/glide.png";
import Mockflow from "../assets/mockflow.png";
import Cropcart from "../assets/cropcart.png";
import ChattyCat from "../assets/chattycat.png";
import RailwaySystem from "../assets/railwaysystem.png";

export default function Projects() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const projects = [
        {
            name: "Glide",
            timeline: "Sept 2025",
            description:
                "Campus mobility platform for cycle lending and carpooling with fare split support used by 200 students and enabling 500 rides.",
            tech: ["React", "Tailwind CSS", "Firebase Auth", "Node.js", "Express", "MongoDB", "JWT"],
            live: "https://glide-ruddy.vercel.app/",
            github: "https://github.com/SaurabhShisode/Glide",
            image: Glide
        },
        {
            name: "MockFlow",
            timeline: "June 2025",
            description:
                "Browser based mock API builder with custom paths, methods, delays and logging used by 30 developers with 50 API endpoints.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
            live: "https://mockflow-lvny.onrender.com/",
            github: "https://github.com/SaurabhShisode/MockFlow",
            image: Mockflow
        },
        {
            name: "CropCart",
            timeline: "May 2025",
            description:
                "Full stack agri commerce platform for direct farmer to consumer sales with Google Maps crop discovery and real time analytics.",
            tech: ["React", "Tailwind CSS", "Firebase Auth", "Node.js", "Express", "MongoDB", "JWT"],
            live: "https://crop-cart-rose.vercel.app/",
            github: "https://github.com/SaurabhShisode/Crop-Cart",
            image: Cropcart
        },
        {
            name: "Railway-System",
            timeline: "Dec 2024",
            description:
                "Java Swing and MySQL based railway reservation system with user login, booking records and cancelation support.",
            tech: ["Java", "Swing", "JDBC", "MySQL"],
            live: null,
            github: "https://github.com/SaurabhShisode/Railway-System",
            image: RailwaySystem
        },
        {
            name: "ChattyCat",
            timeline: "Nov 2024",
            description:
                "A feature rich Python Discord bot offering quotes, reminders, polls, definitions, coin flips, coding challenges, weather info and GIFs.",
            tech: ["Python", "Discord.py", "MongoDB", "Hugging Face API", "OpenWeather API", "YouTube API", "Tenor API"],
            github: "https://github.com/SaurabhShisode",
            live: null,
            image: ChattyCat
        }
    ];

    return (
        <section id="projects" className="bg-[#0d1117] text-white pb-20">
            <motion.h1
                className="text-center text-5xl font-inter font-bold mb-10"
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                Featured <span className="text-[#caa9d3]">Projects</span>
            </motion.h1>

            <div className="relative overflow-y-none mx-44 px-10">

                
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, y: 120, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.02 }}
                    className="flex flex-col gap-6 hide-scrollbar h-max"
                >

                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="bg-[#121924] border border-[#2d384d] rounded-2xl p-6 flex justify-between hover:bg-[#1a2330] transition-all duration-300 font-inter overflow-hidden relative group"
                        >
                            <div className="max-w-[60%]">
                                <h2 className="text-xl font-bold">{project.name}</h2>
                                <p className="text-xs text-gray-500 mt-1">{project.timeline}</p>

                                <p className="text-sm text-gray-300 mt-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map((t, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-[#0d1117] border border-[#2d384d] px-2 py-1 rounded-md"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 mt-6">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1f2937] hover:bg-white hover:text-black transition-all duration-300"
                                        >
                                            <ExternalLink size={16} /> Live
                                        </a>
                                    )}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1f2937] hover:bg-white hover:text-black transition-all duration-300"
                                        >
                                            <Github size={16} /> Code
                                        </a>
                                    )}
                                </div>
                            </div>

                            {project.image && (
                                <a
                                    href={project.live || project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="relative right-0 -bottom-6 translate-x-1/5 group-hover:translate-x-10 transition-transform duration-600 ease-in-out rounded-tl-2xl group-hover:scale-104 w-120"
                                    />
                                </a>
                            )}
                        </div>
                    ))}

                </motion.div>
            </div>

        </section>
    );
}
