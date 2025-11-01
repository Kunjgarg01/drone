import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll(".fade-in"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About the Project
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="bg-gradient-to-br from-slate-900/80 to-blue-950/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Problem Statement</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                The increasing use of drones for surveillance, delivery, and recreational purposes has raised
                concerns about unauthorized aerial intrusions, especially near sensitive zones such as military
                installations, airports, research labs, and government facilities.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Conventional surveillance systems often lack the real-time intelligence and automated physical
                response required to identify and react to such airborne threats effectively.
              </p>
            </div>
          </div>

          <div className="fade-in">
            <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Solution</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                A comprehensive system capable of detecting, identifying, and neutralizing unauthorized drones
                using a multi-faceted approach combining state-of-the-art sensor technology, real-time data
                analysis, and precise countermeasures.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Custom-trained YOLO model for detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time tracking and zone analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">RF jamming for threat mitigation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 fade-in">
          <div className="bg-gradient-to-r from-slate-900/50 to-blue-950/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-center text-cyan-400 mb-8">Project Objectives</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/50">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">Detect Threats</h4>
                <p className="text-gray-400 text-sm">Accurately detect unauthorized drones in various environments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/50">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">Classify Objects</h4>
                <p className="text-gray-400 text-sm">Use ML to identify and differentiate between drones and other objects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/50">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">Neutralize Safely</h4>
                <p className="text-gray-400 text-sm">Deploy effective methods to safely disable unauthorized drones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
