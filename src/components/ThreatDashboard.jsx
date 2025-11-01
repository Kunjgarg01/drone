import React, { useEffect } from "react";
import gsap from "gsap";

const ThreatDashboard = () => {
  useEffect(() => {
    gsap.from(".radar-sweep", { rotation: 360, duration: 8, repeat: -1, ease: "linear" });
  }, []);

  return (
    <section
  id="dashboard"
  className="section min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#000814] via-[#000b18] to-[#000] text-center"
>

      <h2 className="text-4xl font-semibold text-blue-400 mb-10">
        Threat Monitoring Dashboard
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        <div className="relative w-64 h-64 border-4 border-green-500/70 rounded-full flex justify-center items-center shadow-[0_0_35px_#22c55e]">
          <div className="absolute w-1/2 h-1 bg-green-400 origin-left radar-sweep"></div>
          <div className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          <p className="absolute bottom-[-2rem] text-gray-400 text-sm">Live Radar Simulation</p>
        </div>

        <div className="bg-[#0b1120] rounded-xl p-6 shadow-[0_0_25px_#2563eb] text-left w-80 border border-blue-900/40">
          <h3 className="text-xl mb-4 text-blue-300 font-semibold">
            Recent Detections
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>🟢 Drone detected near Zone A – Low Threat</li>
            <li>🟠 Drone detected near Zone B – Medium Threat</li>
            <li>🔴 Unauthorized drone near Zone C – HIGH ALERT</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ThreatDashboard;
