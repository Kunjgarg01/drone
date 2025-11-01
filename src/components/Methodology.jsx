import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Methodology = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const steps = sectionRef.current.querySelectorAll(".method-step");

    steps.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const steps = [
    {
      number: "01",
      title: "Surround & Observe",
      subtitle: "Multi-Camera Deployment",
      description: "Multiple high-angle surveillance cameras installed across perimeter ensuring 360° aerial visibility with continuous live video feeds.",
    },
    {
      number: "02",
      title: "Detect & Identify",
      subtitle: "AI-Powered Recognition",
      description: "Custom-trained YOLOv8 model processes feeds in real-time, drawing bounding boxes and extracting central coordinates.",
    },
    {
      number: "03",
      title: "Track & Trace",
      subtitle: "Live Location Estimation",
      description: "2D positions triangulated from camera angles, plotted live on tracking map, and logged for analysis.",
    },
    {
      number: "04",
      title: "Threat Intelligence",
      subtitle: "Zone-Aware Evaluation",
      description: "Proximity analysis to predefined threat zones with generated threat scores based on location and trajectory.",
    },
    {
      number: "05",
      title: "Neutralize & Defend",
      subtitle: "RF-Based Mitigation",
      description: "Automated RF jammer activation when drone confirmed within critical range and threat threshold.",
    },
    {
      number: "06",
      title: "Feedback Loop",
      subtitle: "Reporting & Alerts",
      description: "System status, coordinates, and mitigation events visualized in central dashboard with administrator alerts.",
    },
  ];

  return (
    <section
      id="methodology"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            System Methodology
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg">
            Six-step process for comprehensive threat detection and mitigation
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 transform -translate-x-1/2 hidden md:block"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`method-step relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
              }`}
            >
              <div className="md:w-1/2 md:absolute md:top-0">
                <div
                  className={`bg-gradient-to-br from-slate-900/80 to-blue-950/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-cyan-500/50">
                      {step.number}
                    </div>
                    <div className={index % 2 === 0 ? "" : "md:text-right"}>
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-cyan-400 text-sm">{step.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-cyan-500/50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
