import { useState, useEffect } from "react";
import { Menu } from 'lucide-react';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [border, setBorder] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > window.innerHeight) {
      setBorder(true);
    } else {
      setBorder(false);
    }


    if (currentScrollY > 180 && currentScrollY > lastScrollY) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 bg-[#0d1117] text-white px-8 py-4 flex justify-between items-center z-50 transform transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"
        } ${border ? "border-b border-1.5 border-gray-800" : ""}`}
    >

      <h1 className="text-2xl tracking-tight font-grotesk">Saurabh<span className="text-gray-500">
        _Commits</span></h1>

      <ul className="hidden md:flex gap-8 text-lg font-poppins">
        <li className="hover:bg-white p-2 rounded-lg hover:text-[#0d1117] transition-all duration-300 ease-in-out">
          <a href="#about">About</a>
        </li>
        <li className="hover:bg-white p-2 rounded-lg hover:text-[#0d1117] transition-all duration-300 ease-in-out">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:bg-white p-2 rounded-lg hover:text-[#0d1117] transition-all duration-300 ease-in-out">
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className="hover:bg-white p-2 rounded-lg hover:text-[#0d1117] transition-all duration-300 ease-in-out">
          <a href="#work">Work</a>
        </li>
        <li className="hover:bg-white p-2 rounded-lg hover:text-[#0d1117] transition-all duration-300 ease-in-out">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        <Menu size={24} />
      </button>

      {open && (
        <div
          className="
      absolute right-2 top-18 bg-[#0d1117] p-4 rounded-lg flex flex-col gap-4 md:hidden font-inter
      transition-all duration-300 ease-out
      opacity-100 translate-y-0 border border-[#1f2b3f] 
    "
          style={{
            animation: open
              ? 'slideFadeIn 0.3s ease-out forwards'
              : 'slideFadeOut 0.3s ease-in forwards',
          }}
        >
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      )}

    </nav>
  );
}
