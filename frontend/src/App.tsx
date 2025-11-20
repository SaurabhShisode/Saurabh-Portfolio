import { useEffect, useState } from "react"
import { useForm } from "@formspree/react"     // <-- IMPORTANT
import { Download } from "lucide-react"
import "./App.css"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import ExtraCurricular from "./components/ExtraCurricular"
import ContactSection from "./components/Contact"   
import Footer from "./components/footer"
export default function App() {
  const [scrolled, setScrolled] = useState(false)

  
  const [state, handleSubmit] = useForm("mpwbkgnz")

 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-[#0d1117]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
      <ExtraCurricular />

    
      <ContactSection state={state} handleSubmit={handleSubmit} />
      <Footer />


      <div className="fixed bottom-9 right-9 z-50">
        <a
          href="/Saurabh Shisode Resume.pdf"
          download
          className={`fixed bottom-10 right-0 bg-gray-400 text-black px-4 py-2 rounded-l-lg flex items-center gap-2 font-medium text-sm shadow-lg transition-all duration-500 ${
            scrolled
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <Download size={18} /> Resume
        </a>
      </div>
    </div>
  )
}
