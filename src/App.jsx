import React from "react";

const Section = ({ id, color, children }) => (
  <section
    id={id}
    className={`min-h-screen flex justify-center items-center text-3xl font-bold ${color}`}
  >
    {children}
  </section>
);

export default function App() {
  return (
    <div>
      <nav className="fixed top-0 w-full bg-gray-900 text-white p-4 flex justify-between z-50">
        <div className="font-bold text-blue-400">Drone Detection</div>
        <div className="space-x-4">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#detection" className="hover:text-blue-400">Detection</a>
          <a href="#dashboard" className="hover:text-blue-400">Dashboard</a>
        </div>
      </nav>

      <div className="pt-20">
        <Section id="home" color="bg-gray-800">Home Section</Section>
        <Section id="detection" color="bg-gray-700">Detection Section</Section>
        <Section id="dashboard" color="bg-gray-600">Dashboard Section</Section>
      </div>

      <footer className="bg-gray-900 text-center p-4 text-gray-400">
        © 2025 Drone Detection Project
      </footer>
    </div>
  );
}
