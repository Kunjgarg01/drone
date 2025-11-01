import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Technology from "./components/Technology";
import Methodology from "./components/Methodology";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Technology />
      <Methodology />
      <Team />
      <Footer />
    </div>
  );
}
