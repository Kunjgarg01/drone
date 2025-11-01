import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-black text-center text-gray-400 border-t border-gray-800">
      <p>© {new Date().getFullYear()} Drone Threat Detection System | Final Year Project</p>
    </footer>
  );
};

export default Footer;
