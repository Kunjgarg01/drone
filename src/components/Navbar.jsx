import React, { useState } from "react";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const handleAuth = (mode) => {
    setAuthMode(mode);
    setShowModal(true);
  };

  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-4 
                      bg-[#050a16]/80 backdrop-blur-lg border-b border-blue-600/40 z-50">
        <h1 className="text-2xl font-bold text-blue-400 drop-shadow-[0_0_10px_#2563eb]">
          Drone Detection
        </h1>
        <div className="flex items-center gap-8">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#detection" className="hover:text-blue-400 transition">Detection</a>
          <a href="#dashboard" className="hover:text-blue-400 transition">Dashboard</a>
          <button
            onClick={() => handleAuth("login")}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-[0_0_15px_#2563eb]"
          >
            Login
          </button>
        </div>
      </nav>

      {showModal && (
        <AuthModal mode={authMode} setMode={setAuthMode} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default Navbar;
