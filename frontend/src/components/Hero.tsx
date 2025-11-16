"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import cloud from "../assets/cloud.png";
import { MoveRight } from 'lucide-react';

export default function Hero() {
  const gradientClass = "bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text";

  const words = [
    { text: "Hi,", className: `${gradientClass} font-inter` },
    { text: "I", className: `${gradientClass} font-inter` },
    { text: "am", className: `${gradientClass} font-inter` },
    { text: "Saurabh", className: `${gradientClass} font-inter` },
  ];

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-10 pt-24 bg-gradient-to-b from-[#ced8f3] to-[#2460e0] overflow-hidden">



      <div className="relative z-10 max-w-xl space-y-4 ml-50">
        <button className="px-2 py-1 border border-black rounded-lg text-sm font-inter">
          Dear Stranger
        </button>

        <TypewriterEffect words={words} />

        <p className="text-lg text-[#0c234a] font-inter">
          A software developer who builds web apps, loves backend and creates useful things people enjoy.
        </p>

        <div className="flex gap-4 pt-2 font-inter">
          <a
            href="#contact"
            className="px-5 py-3 bg-black text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-black "
          >
            Contact Me
          </a>

          <a
            href="#projects"
            className="px-5 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out text-lg flex gap-2 border"
          >
            <span>Explore My Work</span>
            <MoveRight />
          </a>
        </div>

      </div>
    </section>
  );
}
