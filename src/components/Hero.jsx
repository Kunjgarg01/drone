import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const droneRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    gsap.to(droneRef.current, {
      y: -30,
      rotation: 5,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });

    gsap.to(".radar-pulse", {
      scale: 2,
      opacity: 0,
      repeat: -1,
      duration: 2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-slate-950/50 to-cyan-950/30"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="relative inline-block mb-8">
          <div className="radar-pulse absolute inset-0 border-2 border-cyan-400 rounded-full"></div>
          <img
            ref={droneRef}
            src="https://cdn-icons-png.flaticon.com/512/1749/1749593.png"
            alt="Drone"
            className="w-40 h-40 drop-shadow-[0_0_50px_rgba(6,182,212,0.8)]"
          />
        </div>

        <div ref={titleRef}>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent leading-tight">
            Real-Time Airborne
            <br />
            Threat Detection
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered drone monitoring and mitigation system for advanced airspace security
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <a
              href="#about"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300"
            >
              Explore System
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-slate-800/50 border-2 border-cyan-400/50 rounded-lg font-semibold hover:bg-slate-800 hover:border-cyan-400 transition-all duration-300"
            >
              View Features
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">360°</div>
              <div className="text-sm text-gray-400">Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">Real-Time</div>
              <div className="text-sm text-gray-400">Detection</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">AI-Powered</div>
              <div className="text-sm text-gray-400">Analysis</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
