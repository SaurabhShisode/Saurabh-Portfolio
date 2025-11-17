
import { Download } from 'lucide-react';
import './App.css'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import { Pointer } from './components/ui/pointer.tsx'
import About from './components/About.tsx'
import  Experience  from './components/Experience.tsx'
function App() {
  return (
    <div className='bg-[#0d1117]'>
      
      <Navbar />
      <Hero />
      <About />
      < Experience />
      
      <div className="fixed bottom-9 right-9 ">
         <a href="/Saurabh Shisode Resume.pdf" download className="block">
        <div className="relative w-24 h-24 rounded-full  ">

          <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
            <div className="absolute w-1 h-4 bg-yellow-300 rounded-full -top-6"></div>
            <div className="absolute w-1 h-4 bg-yellow-300 rounded-full -bottom-6"></div>
            <div className="absolute w-1 h-4 bg-yellow-300 rounded-full -left-4 -rotate-90"></div>
            <div className="absolute w-1 h-4 bg-yellow-300 rounded-full -right-4 rotate-90"></div>
            <div className="absolute w-1 h-4 bg-yellow-300 rounded-full rotate-45 -top-1 -right-0"></div>
            <div className="absolute w-1 h-4 bg-yellow-300 rounded-full rotate-45 -bottom-1 -left-0"></div>
            <div className="absolute w-1 h-4 bg-yellow-300 rounded-full -rotate-45 -top-1 -left-0"></div>
            <div className="absolute w-1 h-4 bg-yellow-300 rounded-full -rotate-45 -bottom-1 -right-0"></div>
          </div>


          <div className="absolute inset-0 bg-yellow-400 rounded-full flex items-center justify-center group">
            <div className="w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center text-center group-hover:bg-yellow-400 transition-all duration-300 ease-in-out">
              <Download className="w-6 h-6 text-[#1f2937] mb-0.5" />
              <p className="text-[12px] font-poppins text-[#1f2937]">Resume</p>
            </div>
          </div>

        </div>
        </a>
      </div>

    </div>
  )
}

export default App
