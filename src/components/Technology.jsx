import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Technology = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const techItems = sectionRef.current.querySelectorAll(".tech-item");

    gsap.fromTo(
      techItems,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  const technologies = [
    { name: "Python", color: "from-blue-400 to-yellow-400", icon: "🐍" },
    { name: "OpenCV", color: "from-green-400 to-blue-500", icon: "👁️" },
    { name: "TensorFlow", color: "from-orange-400 to-red-500", icon: "🧠" },
    { name: "YOLOv8", color: "from-purple-400 to-pink-500", icon: "🎯" },
    { name: "Pandas", color: "from-blue-300 to-blue-600", icon: "🐼" },
    { name: "NumPy", color: "from-cyan-400 to-blue-500", icon: "🔢" },
  ];

  const hardware = [
    { name: "Radars", icon: "📡" },
    { name: "RF Detectors", icon: "📻" },
    { name: "Optical Sensors", icon: "📷" },
    { name: "Acoustic Sensors", icon: "🔊" },
    { name: "Jamming Devices", icon: "🛡️" },
    { name: "Computing Units", icon: "💻" },
  ];

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg">
            Powered by cutting-edge AI and hardware technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
              Software & AI
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="tech-item group relative bg-gradient-to-br from-slate-900/80 to-blue-950/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 text-center"
                >
                  <div className="text-5xl mb-4">{tech.icon}</div>
                  <h4 className={`text-lg font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                    {tech.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
              Hardware Components
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {hardware.map((item, index) => (
                <div
                  key={index}
                  className="tech-item group relative bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 text-center"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold text-white">
                    {item.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900/50 to-blue-950/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-center text-cyan-400 mb-6">
            System Requirements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🔍</div>
              <h4 className="font-bold text-white mb-2">Detection Software</h4>
              <p className="text-sm text-gray-400">ML algorithms, signal processing, image analysis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎛️</div>
              <h4 className="font-bold text-white mb-2">Control Software</h4>
              <p className="text-sm text-gray-400">Integration platform, UI, decision algorithms</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-bold text-white mb-2">Security Software</h4>
              <p className="text-sm text-gray-400">Encryption tools, intrusion detection systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
