import React, { useState, useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".nav-logo",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.3, ease: "power2.out" }
    );
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-blue-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="nav-logo flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AirGuard AI
              </h1>
              <p className="text-xs text-gray-400">Threat Detection System</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href="#home" className="nav-item text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="nav-item text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              About
            </a>
            <a href="#features" className="nav-item text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Features
            </a>
            <a href="#technology" className="nav-item text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Technology
            </a>
            <a href="#team" className="nav-item text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Team
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
