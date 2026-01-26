import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex flex-col md:flex-row md:items-center md:justify-between">
      
     
      <div className="flex items-center space-x-5 mb-4 md:mb-0">
      
          <img
            src="/IMG/4.png"
            alt="Logo"
            className="h-19 w-19 object-contain rounded-lg"
          />
        
        <div className="flex flex-col">
           <span className="text-white text-lg md:text-xl">
            <span className="font-normal text-pink-600">Isabelle</span>{" "}
            <span className="font-bold">Nauber-Gelhaar</span>
          </span>

    
          <span className="text-sm text-gray-400 md:text-base">
            Web Developer &amp; Web Designer
          </span>
        
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          to="/contact"
          className="text-white hover:text-gray-300 border-2 border-pink-600 px-2 py-1"
        >
          Contact
        </Link>
        <a href="https://github.com/..." target="_blank" rel="noopener noreferrer">
          <img
            src="/IMG/GitHubIcon.png"
            alt="GitHub"
            className="h-7 w-7 hover:opacity-80 transition-opacity"
          />
        </a>
        <a href="https://linkedin.com/in/..." target="_blank" rel="noopener noreferrer">
          <img
            src="/IMG/LinkedInIcon.png"
            alt="LinkedIn"
            className="h-7 w-7 hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

