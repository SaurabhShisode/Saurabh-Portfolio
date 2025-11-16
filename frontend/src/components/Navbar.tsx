import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#0d1117] text-white px-8 py-4 flex justify-between items-center z-50">
      <h1 className="text-2xl  tracking-tight font-grotesk">Saurabh</h1>

      <ul className="hidden md:flex gap-8 text-lg font-poppins">
        <li className="hover:bg-white p-2 rounded-lg hover:text-[#0d1117] transition-all duration-300 ease-in-out"><a href="#about">About</a></li>
        <li className="hover:bg-white p-2 rounded-lg hover:text-[#0d1117] transition-all duration-300 ease-in-out"><a href="#projects">Projects</a></li>
        <li className="hover:bg-white p-2 rounded-lg hover:text-[#0d1117] transition-all duration-300 ease-in-out"><a href="#testimonials">Testimonials</a></li>
        <li className="hover:bg-white p-2 rounded-lg hover:text-[#0d1117] transition-all duration-300 ease-in-out"><a href="#work">Work</a></li>
        <li className="hover:bg-white p-2 rounded-lg hover:text-[#0d1117] transition-all duration-300 ease-in-out"><a href="#contact">Contact</a></li>
      </ul>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className="absolute right-8 top-16 bg-[#0d1117] p-4 rounded-lg flex flex-col gap-4 md:hidden">
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
