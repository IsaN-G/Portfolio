import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black  h-120 flex items-center justify-center pb-4">
  <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Isabelle Nauber-Gelhaar — Alle Rechte vorbehalten.
          
        </div> 
        </div>


    </footer>
  );
};

export default Footer;
