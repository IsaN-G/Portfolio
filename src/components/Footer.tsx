import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4 mt-auto">
      &copy; {new Date().getFullYear()} Meine by Isabelle Nauber-Gelhaar
    </footer>
  );
};

export default Footer;
