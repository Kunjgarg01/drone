import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  AirGuard AI
                </h3>
                <p className="text-xs text-gray-400">Threat Detection System</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Advanced AI-powered drone detection and mitigation system for airspace security.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300">About</a>
              <a href="#features" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300">Features</a>
              <a href="#technology" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300">Technology</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Institution</h4>
            <p className="text-gray-400 text-sm mb-2">ABES Engineering College</p>
            <p className="text-gray-400 text-sm mb-2">Ghaziabad, Uttar Pradesh</p>
            <p className="text-gray-400 text-sm">Department of CSE-AIML</p>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © {new Date().getFullYear()} Real-Time Airborne Threat Detection System | Final Year Project
          </p>
          <p className="text-gray-500 text-xs">
            Developed by Sahil Ahuja & Kunj Garg under the guidance of Dr. Puneet Aggarwal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
