import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex items-center justify-between">
      
      <div className="flex items-center space-x-4">
        <a href="/">
          <img
            src="/IMG/2.png"
            alt="Logo"
            className="h-10 w-10 object-contain rounded-lg"
          />
        </a>
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg">
            Isabelle Nauber-Gelhaar
          </span>
          <span className="text-sm text-gray-400 font-medium">
          Webentwicklerin &amp; Webdesignerin
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/contact" className="text-white hover:text-gray-300 border-2 border-purple-500 px-2 py-1">
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
