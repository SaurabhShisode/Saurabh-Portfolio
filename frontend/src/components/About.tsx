
import leetcode from "../assets/leetcode.png";
import code from "../assets/code.png";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { motion } from "framer-motion"

import badge from "../assets/badge.gif";
import { useState } from "react";
import { ClipboardCopy } from "lucide-react";
export default function About() {
    const tech = [
        { name: "React", img: "/logos/react.svg" },
        { name: "TypeScript", img: "/logos/typescript.svg" },

        { name: "Node.js", img: "/logos/node.svg" },
        { name: "Express", img: "/logos/express.svg" },
        { name: "MongoDB", img: "/logos/mongodb.svg" },
        { name: "JavaScript", img: "/logos/javascript.svg" },
        { name: "TailwindCSS", img: "/logos/tailwind.svg" },
        { name: "Java", img: "/logos/java.svg" },
        { name: "C++", img: "/logos/c++.svg" },
        { name: "SQL", img: "/logos/mysql.svg" },
        { name: "GitHub", img: "/logos/github.svg" },
        { name: "Typescript", img: "/logos/typescript.svg" },

    ];
    const items = [...tech, ...tech, ...tech, ...tech, ...tech, ...tech, ...tech, ...tech];

    const repos = [
        { name: "Crop-Cart", language: "TypeScript", color: "bg-blue-500", url: "https://github.com/SaurabhShisode/Crop-Cart" },
        { name: "Crop-Cart-Backend", language: "JavaScript", color: "bg-yellow-400", url: "https://github.com/SaurabhShisode/Crop-Cart-Backend" },
        { name: "DiscordBot-ChattyCat", language: "Python", color: "bg-blue-500", url: "https://github.com/SaurabhShisode/Crop-Cart-Backend" },
        { name: "MockFlow", language: "TypeScript", color: "bg-blue-500", url: "https://github.com/SaurabhShisode/MockFlow" },
        { name: "Glide", language: "TypeScript", color: "bg-blue-500", url: "https://github.com/SaurabhShisode/Glide" },
        { name: "ecomm-recommender", language: "JavaScript", color: "bg-yellow-400", url: "https://github.com/SaurabhShisode/ecomm-recommender" },

    ]
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("saurabhshisode@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <section id="about" className="bg-[#0d1117] text-white py-10 px-10 min-h-screen">
            <div className="pb-10 ">
                <div className="overflow-hidden">
                    <div
                        className="
        flex gap-16 animate-marquee whitespace-nowrap"
                    >
                        {items.map((t, i) => (
                            <div key={i} className="flex items-center gap-4 flex-none group">
                                <img
                                    src={t.img}
                                    alt={t.name}
                                    className="w-10 h-10 object-contain grayscale invert opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                                />
                                <span className="text-gray-400 font-poppins text-lg whitespace-nowrap transition-all duration-300 group-hover:text-white">
                                    {t.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative">
                <motion.h1
                    className="font-inter text-5xl mb-10 text-center font-bold relative z-0"
                    initial={{ opacity: 0, y: 80, scale: 0.85 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    A little bit <span className="text-[#caa9d3]">About Me</span>
                </motion.h1>



                <div className="grid grid-cols-5 grid-rows-12 gap-10 mx-44 z-50">
                    <div
                        className="col-span-3 row-span-6 bg-[#121924] border border-[#1f2b3f] rounded-2xl h-160 bg-cover bg-center bg-no-repeat group"

                    >
                        <h1 className="font-inter text-3xl font-bold p-9 mr-18 group-hover:ml-3 transition-all duration-300  ease-in-out">
                            I create software that turns ideas into scalable products
                        </h1>
                        <div className="relative overflow-hidden w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl  mx-auto px-6 translate-x-[50px] md:translate-x-[120px] group-hover:translate-x-0 transition-all duration-600 ease-in-out">
                                {repos.map((repo, i) => (
                                    <div
                                        key={i}
                                        className="border border-[#2d384d] bg-[#0d1117] rounded-xl p-5 flex flex-col gap-3 hover:bg-[#111826] transition-all"
                                    >
                                        <div className="flex justify-between items-center">
                                            <a className="text-[#2f81f7] font-medium text-lg hover:underline" href={repo.url} target="_blank" rel="noopener noreferrer">
                                                {repo.name}
                                            </a>
                                            <span className="text-xs border border-gray-500 rounded-full px-2 py-[2px] text-gray-300">
                                                Public
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className={`${repo.color} w-3 h-3 rounded-full`} />
                                            <span className="text-sm text-gray-300">{repo.language}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>


                    <div className="col-span-2 row-span-3 col-start-4 bg-[#121924] border border-[#1f2b3f]  rounded-2xl p-4 group overflow-clip"><h1 className="font-inter text-3xl font-bold p-5 mr-18 group-hover:ml-3 transition-all duration-300 ease-in-out ">
                        My expertise include Web, AI, and backend
                    </h1>


                    </div>

                    <div className="col-span-2 row-span-3 col-start-4 row-start-4 bg-[#121924] border border-[#1f2b3f] rounded-2xl p-4 group">
                        <h1 className="font-inter text-3xl font-bold p-5 mr-18 leading-relaxed group-hover:ml-3 transition-all duration-300 ease-in-out">
                            <span className="text-sm font-light block">
                                I build products
                                <span className="block">with optimised</span>
                            </span>
                            <span className="block">tech stacks</span>
                        </h1>
                    </div>


                    <div className="relative col-span-2 row-span-3 row-start-7 bg-[#121924] border border-[#1f2b3f] rounded-2xl p-4 overflow-hidden group">

                        <h1 className="font-inter text-3xl font-bold p-5 mr-20 group-hover:ml-3 transition-all duration-300 ease-in-out z-10 relative group-hover:opacity-0">
                            A curious developer obsessed with problem solving
                            <span className="block">and user </span>
                            <span className="block">experience</span>

                        </h1>

                        <img
                            src={badge}
                            alt="gif"
                            className="absolute bottom-15 right-0 w-48 object-contain opacity-90 transition-all duration-700 ease-in-out group-hover:scale-120
                        group-hover:right-35 group-hover:bottom-10"
                        />
                    </div>


                    <div className="relative col-span-2 row-span-3 border border-[#1f2b3f] rounded-2xl overflow-hidden">


                        <div className="absolute inset-0 z-0">
                            <BackgroundGradientAnimation
                                className="h-full w-full"
                                containerClassName="h-full w-full"
                            />
                        </div>


                        <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-16 h-full">
                            <h1 className="font-inter text-3xl font-bold text-white drop-shadow-md font-inter">
                                Have an idea? Tell Me
                                <span className="block">About It!</span>
                            </h1>

                            <button
                                onClick={handleCopy}
                                className="mt-8 px-6 py-3 rounded-xl bg-[#0f111a]/80 border border-white/20 text-white flex items-center gap-2 hover:bg-[#1a1f2e] transition-all duration-300 cursor-pointer font-inter"
                            >
                                <ClipboardCopy size={18} />
                                {copied ? "Email copied!" : "Copy my email address"}
                            </button>
                        </div>
                    </div>







                    <div className="col-span-3 row-span-6 col-start-3 row-start-7 bg-[#121924] border border-[#1f2b3f] rounded-2xl p-4 h-160 group overflow-hidden relative">

                        <h1 className="font-inter text-3xl font-bold p-5 mr-20 group-hover:ml-3 transition-all duration-300 ease-in-out">
                            <span className="mb-3 text-sm font-light block">
                                The Insider
                            </span>
                            Solving real-world algorithmic challenges to sharpen problem-solving and system thinking
                        </h1>

                        <a href="https://leetcode.com/SaurabhShisode/">
                            <img
                                src={leetcode}
                                alt="LeetCode"
                                className=" relative right-0 -bottom-1 object-contain translate-x-1/5 group-hover:translate-x-24 transition-transform duration-600 ease-in-out rounded-2xl group-hover:scale-104"
                            />
                        </a>
                    </div>


                </div>
            </div>
        </section>
    );
}
