"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="CodeAI"
            width={65}
            height={65}
            className="rounded-xl"
          />

          <div>
            <h1 className="text-3xl font-extrabold">
              Code<span className="text-cyan-400">AI</span>
            </h1>
            <p className="text-xs uppercase tracking-[5px] text-gray-400">
              Institute
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-200 font-medium">

          <a href="#home" className="hover:text-cyan-400 transition duration-300">
            Home
          </a>

          <a href="#courses" className="hover:text-cyan-400 transition duration-300">
            Courses
          </a>

          <a href="#about" className="hover:text-cyan-400 transition duration-300">
            About
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition duration-300">
            Contact
          </a>

        </div>

        {/* Join Button */}
        <a
          href="#contact"
          className="hidden md:block bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/40"
        >
          Join Now
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-cyan-500/20">

          <a
            href="#home"
            className="block px-6 py-4 hover:bg-slate-800"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#courses"
            className="block px-6 py-4 hover:bg-slate-800"
            onClick={() => setMenuOpen(false)}
          >
            Courses
          </a>

          <a
            href="#about"
            className="block px-6 py-4 hover:bg-slate-800"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#contact"
            className="block px-6 py-4 hover:bg-slate-800"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}