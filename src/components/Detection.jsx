import React, { useState } from "react";
import gsap from "gsap";

const Detection = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    gsap.fromTo(".preview", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.7 });
  };

  return (
    <section id="detection" className="section min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#080b12]">
      <h2 className="text-4xl font-semibold text-blue-400 mb-4">Detection Panel</h2>
      <p className="text-gray-400 mb-6 max-w-xl">
        Upload a drone image for AI-based analysis and identification.
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="p-3 bg-gray-900 text-gray-100 rounded border border-blue-500 hover:border-blue-400 cursor-pointer transition"
      />

      {file && (
        <div className="preview mt-8">
          <img
            src={file}
            alt="Drone Upload"
            className="rounded-lg shadow-[0_0_25px_#2563eb] w-80 border border-blue-900"
          />
        </div>
      )}
    </section>
  );
};

export default Detection;
