import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const droneRef = useRef(null);

  useEffect(() => {
    gsap.to(droneRef.current, {
      x: 120,
      y: 40,
      repeat: -1,
      yoyo: true,
      duration: 5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section id="home" className="section min-h-screen flex flex-col justify-center items-center text-center px-6">
      <img
        ref={droneRef}
        src="https://cdn-icons-png.flaticon.com/512/1749/1749593.png"
        alt="drone"
        className="w-32 mb-8 drop-shadow-[0_0_25px_#2563eb]"
      />
      <h1 className="text-5xl font-bold text-blue-400 mb-4">Real-Time Drone Threat Detection</h1>
      <p className="text-gray-300 max-w-2xl leading-relaxed">
        AI-powered drone monitoring and detection system for airspace security.
      </p>
      <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg shadow-[0_0_15px_#2563eb] transition">
        Explore
      </button>
    </section>
  );
};

export default Home;
