import React, { useEffect } from "react";
import gsap from "gsap";

const LoginModal = ({ onClose }) => {
  useEffect(() => {
    gsap.fromTo(
      ".login-modal",
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="login-modal bg-[#0b1120] p-6 rounded-lg w-80 shadow-[0_0_25px_#2563eb] border border-blue-800">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-400">
          Secure Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
        <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700 transition">
          Login
        </button>
        <button
          onClick={onClose}
          className="mt-3 w-full bg-gray-700 py-2 rounded hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
