import React from "react";

const AuthModal = ({ mode, setMode, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[60]">
      <div className="bg-[#0f1626] p-8 rounded-xl shadow-[0_0_30px_#2563eb] w-96 text-center">
        <h2 className="text-2xl text-blue-400 font-bold mb-6">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 rounded bg-[#1a1a1a] border border-blue-500 outline-none text-gray-100"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-3 rounded bg-[#1a1a1a] border border-blue-500 outline-none text-gray-100"
        />
        {mode === "signup" && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full mb-3 p-3 rounded bg-[#1a1a1a] border border-blue-500 outline-none text-gray-100"
          />
        )}
        <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded mt-3">
          {mode === "login" ? "Login" : "Create Account"}
        </button>
        <p
          className="text-sm text-gray-400 mt-4 cursor-pointer hover:text-blue-400"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
        >
          {mode === "login"
            ? "Don’t have an account? Sign up"
            : "Already registered? Login"}
        </p>
        <p
          className="text-sm text-gray-400 mt-3 cursor-pointer hover:text-red-400"
          onClick={onClose}
        >
          Close
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
