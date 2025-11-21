"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import cartoon from "../assets/cartoon.png";
import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { Download } from "lucide-react"
import { Mail } from 'lucide-react';
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Hero() {
  const gradientClass =
    "bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-3xl md:text-5xl";

  const words = [
    { text: "Hi,", className: `${gradientClass} font-inter` },
    { text: "I", className: `${gradientClass} font-inter` },
    { text: "am", className: `${gradientClass} font-inter` },
    { text: "Saurabh", className: `${gradientClass} font-inter` },
  ];

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-8 pt-24 bg-gradient-to-b from-[#cdd4e7] to-[#1c48a8] overflow-hidden">

      <div className="relative z-10 space-y-4 
        flex flex-col md:flex-row 
        items-center  
        justify-between
        gap-10 md:gap-6 
        w-full md:w-[85%]
        mx-auto
        lg:ml-50 lg:mr-6 ">

        <motion.div
          className="space-y-4 
            md:min-w-lg 
            text-center md:text-left
            md:ml-auto mt-10 md:mt-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.button
            variants={item}
            className=" px-2 py-1 border border-black 
              rounded-lg text-sm font-inter
              mx-auto md:mx-0"
          >
            Dear Stranger
          </motion.button>

          <motion.div variants={item}>
            <TypewriterEffect words={words} />
          </motion.div>

          <motion.p
            variants={item}
            className="text-base text-[#0c234a] font-inter"
          >
            A software developer who builds web apps, loves backend and creates useful things people enjoy.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row 
              gap-4 pt-2 font-inter
              justify-center md:justify-start px-20 md:px-0 text-sm w-fit"
          >
            <a
              href="mailto:shisodesaurabh48@gmail.com"
              className="
                px-4 py-3 bg-black text-white 
                rounded-lg flex gap-2 items-center justify-center
                transition-all duration-300 hover:bg-white hover:text-black 
              "
            >
              <Mail size={18} /> Contact Me
            </a>

            <a
              href="/Saurabh Shisode Resume.pdf"
              download
              className="
                px-4 py-3 bg-black text-white 
                rounded-lg flex gap-2 items-center justify-center
                transition-all duration-300 hover:bg-white hover:text-black
              "
            >
              <Download size={18} /> Resume
            </a>

            <a
              href="#projects"
              className="
                px-5 py-3 font-semibold rounded-lg 
                text-lg flex items-center gap-2 
                justify-center
                hover:scale-105 transition-all duration-300 
              "
            >
              <span className="text-base">Explore My Work</span>
              <MoveRight className="rotate-90 md:rotate-0" />
            </a>
          </motion.div>
        </motion.div>


        <div className="flex-shrink-0 md:mr-10">
          <img
            src={cartoon}
            alt="Cartoon"
            className="
    relative top-0 scale-115
    w-[500px] md:w-64 lg:w-140 
    drop-shadow-xl
    md:scale-100 md:top-0 md:right-20
  "
          />

        </div>
      </div>
    </section>
  );
}