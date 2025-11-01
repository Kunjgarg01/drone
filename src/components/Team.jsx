import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".team-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Project Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg">
            ABES Engineering College, Ghaziabad | Department of CSE-AIML
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="team-card group bg-gradient-to-br from-slate-900/80 to-blue-950/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-lg shadow-cyan-500/50">
              👨‍🏫
            </div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">
              Dr. Puneet Aggarwal
            </h3>
            <p className="text-gray-400 text-sm mb-4">Project Guide</p>
            <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
          </div>

          <div className="team-card group bg-gradient-to-br from-slate-900/80 to-blue-950/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-lg shadow-cyan-500/50">
              👨‍💻
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Sahil Ahuja
            </h3>
            <p className="text-gray-400 text-sm mb-4">2200320230039</p>
            <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
          </div>

          <div className="team-card group bg-gradient-to-br from-slate-900/80 to-blue-950/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-lg shadow-cyan-500/50">
              👨‍💻
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Kunj Garg
            </h3>
            <p className="text-gray-400 text-sm mb-4">2200320230</p>
            <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900/50 to-blue-950/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Project Domain
            </h3>
            <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Artificial Intelligence & Machine Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
