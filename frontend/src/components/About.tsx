
import leetcode from "../assets/leetcode.png";

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


    ];
    const items = [...tech, ...tech, ...tech, ...tech, ...tech, ...tech, ...tech, ...tech];

    const repos = [
        { name: "Crop-Cart", language: "TypeScript", color: "bg-purple-500", url: "https://github.com/SaurabhShisode/Crop-Cart" },
        { name: "Crop-Cart-Backend", language: "JavaScript", color: "bg-green-400", url: "https://github.com/SaurabhShisode/Crop-Cart-Backend" },
        { name: "DiscordBot-ChattyCat", language: "Python", color: "bg-blue-500", url: "https://github.com/SaurabhShisode/Crop-Cart-Backend" },
        { name: "MockFlow", language: "TypeScript", color: "bg-purple-500", url: "https://github.com/SaurabhShisode/MockFlow" },
        { name: "Glide", language: "TypeScript", color: "bg-purple-500", url: "https://github.com/SaurabhShisode/Glide" },
        { name: "ecomm-recommender", language: "JavaScript", color: "bg-green-400", url: "https://github.com/SaurabhShisode/ecomm-recommender" },
        { name: "Glide-backend", language: " JavaScript", color: "bg-green-400", url: "https://github.com/SaurabhShisode/Glide-backend" },
        { name: "Saurabh-Portfolio", language: "TypeScript", color: "bg-yellow-400", url: "https://github.com/SaurabhShisode/Saurabh-Portfolio" },

    ]


    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("shisodesaurabh48@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <section id="about" className="bg-[#0d1117] text-white py-10  min-h-screen md:mb-10">
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
                    className="font-inter text-3xl md:text-4xl mb-10 text-center font-bold relative z-0"
                    initial={{ opacity: 0, y: 80, scale: 0.85 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    A little bit <span className="text-[#caa9d3]">About Me</span>
                </motion.h1>



                <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-5 md:grid-rows-12 gap-6 md:gap-8 px-4 md:px-10 lg:px-10 lg:mx-24 z-50 h-260 md:h-280 lg:h-310 ">

                    <div
                        className="
      bg-[#121924] border border-[#1f2b3f] rounded-2xl 
       md:p-0 
      col-span-1 md:col-span-3 md:row-span-6 
      bg-cover bg-center bg-no-repeat group overflow-hidden 
    "
                    >
                        <h1 className="font-inter text-base md:text-lg lg:text-2xl font-bold p-4 md:p-9 mr-18 group-hover:ml-3 transition-all duration-300 ease-in-out">
                            I create software that turns ideas into scalable products
                        </h1>

                        <div className="relative overflow-hidden w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full md:min-w-xl max-w-3xl mx-auto px-6 translate-x-[40px] 
                            translate-y-[6px] 
                            md:translate-x-[120px] 
                            md:translate-y-0 group-hover:translate-x-0 transition-all duration-600 ease-in-out mb-4 md:mb-0 gr">

                                {(window.innerWidth < 768 ? repos.slice(0, 3) : repos).map((repo, i) => (
                                    <div
                                        key={i}
                                        className="border border-[#2d384d] bg-[#0d1117] rounded-xl p-4 md:p-4 lg:p-5 flex flex-col gap-2 lg:gap-3 hover:bg-[#111826] transition-all"
                                    >
                                        <div className="flex justify-between items-center">
                                            <a className="text-[#2f81f7] font-medium text-base md:text-sm hover:underline"
                                                href={repo.url}
                                                target="_blank"
                                                rel="noopener noreferrer font-inter">
                                                {repo.name}
                                            </a>
                                            <span className="text-xs border border-gray-500 rounded-full mr-2 md:mr-0 px-2 py-0.5 text-gray-300 font-inter">
                                                Public
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className={`${repo.color} w-2 h-2 lg:w-3 lg:h-3 rounded-full`} />
                                            <span className="text-xs md:text-xs lg:text-sm text-gray-300 font-inter">{repo.language}</span>
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>


                    <div className="
    col-span-1 md:col-span-2 
    md:row-span-3 md:col-start-4 
    bg-[#121924] border border-[#1f2b3f] rounded-2xl relative group overflow-hidden 
  ">
                        <h1 className="font-inter text-base  md:text-base lg:text-2xl font-bold p-4 md:p-9 lg:mr-18 group-hover:ml-3 transition-all duration-300 ease-in-out text-white leading-snug relative z-10">
                            My expertise include
                            <span className="block">Web, AI & Backend</span>
                        </h1>

                        <div
                            className="absolute -bottom-2 -right-3 w-[90%] h-[55%] bg-[#0d1117dd] backdrop-blur-md rounded-tl-2xl border border-[#2d384d] p-4 font-mono text-sm 
                            md:translate-x-6  lg:translate-y-10 group-hover:translate-x-1 group-hover:translate-y-2 
                            md:group-hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(.22,.68,0,1.21)]"
                        >
                            <div className="text-xs text-gray-500 mb-2 flex gap-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>

                            <code className="text-gray-300 block">
                                <span className="text-gray-500">// API route example</span><br />
                                <span className="text-pink-400">app</span>.<span className="text-blue-400">get</span>
                                (
                                <span className="text-yellow-300">'/api/chat'</span>
                                , (req, res) =&gt; {`{`}<br />
                                &nbsp;&nbsp;<span className="text-pink-400">return</span> res.<span className="text-blue-400">json</span>({`{ message: "Hello World" }`});<br />
                                {`}`} );
                            </code>

                            <code className="text-gray-300 opacity-100 translate-y-4 transition-all group-hover:translate-y-0 block">
                                <br />
                                <span className="text-gray-500">// Middleware example</span><br />
                                <span className="text-pink-400">app</span>.<span className="text-blue-400">use</span>
                                (
                                <span className="text-yellow-300">'/api'</span>
                                , authMiddleware)<br /><br />

                                <span className="text-gray-500">// Async function</span><br />
                                <span className="text-pink-400">const</span> fetchData =
                                <span className="text-blue-400"> async</span>
                                () =&gt; {`{`}<br />
                                &nbsp;&nbsp;const data = await fetch('/api/chat');<br />
                                &nbsp;&nbsp;return data;<br />
                                {`}`};
                            </code>

                        </div>
                    </div>

              
                    <div className="
    relative 
    col-span-1 md:col-span-2 
    md:row-span-3 md:col-start-4 md:row-start-4 
    bg-[#121924] border border-[#1f2b3f] rounded-2xl md:p-4 group overflow-hidden 
  ">
                        <h1 className="font-inter text-base md:text-base lg:text-2xl font-bold p-3 md:p-5 mr-18 leading-relaxed group-hover:ml-3 transition-all duration-300 ease-in-out">
                            <span className="text-sm font-light block">I build products<span className="md:block">with optimised</span></span>
                            <span className="block">tech stacks</span>
                        </h1>

                        <div
                            className="absolute -bottom-2 -right-3 w-[90%] h-[55%] bg-[#0d1117dd] backdrop-blur-md rounded-tl-2xl border border-[#2d384d] p-4 font-mono text-sm 
                            md:translate-x-6  lg:translate-y-10 group-hover:translate-x-1 group-hover:translate-y-2 
                            md:group-hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(.22,.68,0,1.21)]"
                        >
                            <div className="w-full h-2 bg-[#2d384d] rounded-full overflow-hidden flex mb-3">
                                <div className="bg-purple-500 w-[59.2%]"></div>
                                <div className="bg-green-400 w-[18.07%]"></div>
                                <div className="bg-[#e34c26] w-[8.06%]"></div>
                                <div className="bg-[#563d7c] w-[6.75%]"></div>
                                <div className="bg-[#b07219] w-[6.27%]"></div>
                                <div className="bg-blue-500 w-[1.65%]"></div>
                            </div>

                            <div className="grid grid-cols-2 lg:gap-x-4 gap-y-2 text-xs md:text-[10px] text-gray-300 font-inter">
                                <div className="flex items-center gap-2"><span className="w-2 h-2 lg:w-3 lg:h-3 bg-purple-500 rounded-full"></span>TypeScript 59.20%</div>
                                <div className="flex items-center gap-2"><span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#563d7c] rounded-full"></span>CSS 6.75%</div>
                                <div className="flex items-center gap-2"><span className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full"></span>JavaScript 18.07%</div>
                                <div className="flex items-center gap-2"><span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#b07219] rounded-full"></span>Java 6.27%</div>
                                <div className="flex items-center gap-2"><span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#e34c26] rounded-full"></span>HTML 8.06%</div>
                                <div className="flex items-center gap-2"><span className="w-2 h-2 lg:w-3 lg:h-3 bg-blue-500 rounded-full"></span>Python 1.65%</div>
                            </div>
                        </div>
                    </div>

           
                    <div className="
    relative 
    col-span-1 md:col-span-2 
    md:row-span-3 md:row-start-7 
    bg-[#121924] border border-[#1f2b3f] rounded-2xl md:p-4 overflow-hidden group 
  ">
                        <h1 className="font-inter text-base lg:text-2xl font-bold p-3 md:p-5  lg:mr-20 group-hover:ml-3 transition-all duration-300 ease-in-out z-10 relative group-hover:opacity-0">
                            A curious developer obsessed  
                            <span className="block md:inline"> with problem solving</span>
                            <span className="block">and user</span>
                            <span className="block">experience</span>
                        </h1>

                        <img
  src={badge}
  alt="gif"
  className="
    absolute w-24 bottom-10 right-0 
    md:w-28 md:right-4
    lg:w-44 lg:bottom-15 lg:right-0
    object-contain opacity-90 
    transition-all duration-700 ease-in-out
    
    group-hover:bottom-1/2 
    group-hover:right-1/2 
    group-hover:translate-x-1/2 
    group-hover:translate-y-1/2 
    group-hover:scale-120
  "
/>

                    </div>

                    <div className="
    relative 
    col-span-1 md:col-span-2 
    md:row-span-3 
    border border-[#1f2b3f] rounded-2xl overflow-hidden 
  ">
                        <div className="absolute inset-0 z-0">
                            <BackgroundGradientAnimation className="h-full w-full" containerClassName="h-full w-full" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-16 h-full ">
                            <h1 className="font-inter text-base lg:text-2xl font-bold text-white drop-shadow-md font-inter">
                                Have an idea? Tell Me
                                <span className="block">About It!</span>
                            </h1>

                            <button
                                onClick={handleCopy}
                                className="mt-2 md:mt-8 px-6 py-3 rounded-xl bg-[#0f111a]/80 border border-white/20 text-white flex items-center gap-2 hover:bg-[#1a1f2e] transition-all duration-300 cursor-pointer font-inter  text-sm md:text-[10px] lg:text-base"
                            >   
                            <ClipboardCopy size={15} className="block lg:hidden" />
                                <ClipboardCopy size={18} className="hidden lg:block" />
                                {copied ? "Email copied!" : "Copy my email address"}
                            </button>
                        </div>
                    </div>

                  
                    <div className="
    col-span-1 md:col-span-3 
    md:row-span-6 md:col-start-3 md:row-start-7 
    bg-[#121924] border border-[#1f2b3f] rounded-2xl md:p-4 group overflow-hidden relative
  ">
                        <h1 className="font-inter text-base lg:text-2xl font-bold p-3 lg:mr-20 group-hover:ml-3 transition-all duration-300 ease-in-out">
                            <span className="hidden md:block">
                            <span className="mb-1 md:mb-3 text-xs md:text-sm font-light block">The Insider</span>
                            Solving real-world algorithmic challenges to sharpen problem-solving and system thinking
                            </span>
                            <span className="block md:hidden">
                            <span className="mb-1 md:mb-3 text-xs md:text-sm font-light block">The Insider</span>
                            Solving real-world a
                            <span className="block">Algorithmic 
                                <span className="block">challenges </span></span>
                            </span>
                        </h1>

                        <a href="https://leetcode.com/SaurabhShisode/">
                            <img
                                src={leetcode}
                                alt="LeetCode"
                                className="relative right-0 bottom-0 object-contain translate-x-50 -translate-y-25 
                                md:translate-x-40 md:translate-y-35 
                                md:scale-140
                                md:group-hover:translate-x-35 
                                md:group-hover:translate-y-28
                                md:group-hover:scale-145  
                                lg:translate-x-1/5 lg:translate-y-14 
                                lg:scale-100
                                lg:group-hover:translate-x-23 
                                lg:group-hover:translate-y-12 
                                lg:group-hover:scale-104 transition-transform duration-600 ease-in-out rounded-2xl "
                            />
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}
