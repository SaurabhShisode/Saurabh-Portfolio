"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[#0d1117] text-white py-16 font-inter overflow-hidden">

      <div
  className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-blue-500/20 pointer-events-none"
  style={{
    maskImage: "radial-gradient(50% 50% at bottom center, black, transparent)",
    WebkitMaskImage: "radial-gradient(50% 50% at bottom center, black, transparent)",
  }}
></div>



      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8 relative z-10"
      >
        <h2 className="text-3xl font-bold">
          Let’s <span className="text-[#caa9d3]">Connect</span>
        </h2>

        <div className="flex gap-6">
          <a
            href="https://github.com/SaurabhShisode"
            target="_blank"
            className="p-3 rounded-xl bg-[#121924] border border-[#2d384d] hover:bg-white hover:text-black transition-all duration-300"
          >
            <Github size={22} />
          </a>

          <a
            href="https://linkedin.com/in/saurabhshisode"
            target="_blank"
            className="p-3 rounded-xl bg-[#121924] border border-[#2d384d] hover:bg-white hover:text-black transition-all duration-300"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://www.instagram.com/saurabh_shisode_?igsh=MWZ3cHRwNmM0NTJxNA=="
            target="_blank"
            className="p-3 rounded-xl bg-[#121924] border border-[#2d384d] hover:bg-white hover:text-black transition-all duration-300"
          >
            <Instagram size={22} />
          </a>

          <a
            href="https://x.com/NotSaurabh_?t=qQ5fWs5t_HzRnbg5vYr3Fw&s=09"
            target="_blank"
            className="p-3 rounded-xl bg-[#121924] border border-[#2d384d] hover:bg-white hover:text-black transition-all duration-300"
          >
            <Twitter size={22} />
          </a>
        </div>

        <div className="w-full h-px bg-[#2d384d]"></div>

        <p className="text-gray-400 text-sm text-center">
          Designed and built by <span className="text-[#caa9d3]">Saurabh</span>.
        </p>
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}
