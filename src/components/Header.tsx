import React from 'react';

const Header = () => {
  return (
    <header className="relative w-full h-[500px] overflow-hidden">
    
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Video/header.mp4" 
        autoPlay
        muted
        loop
      />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white bg-black/30">
        <h1 className="text-5xl font-bold">Willkommen!</h1>
        <p className="mt-4 text-xl"></p>
      </div>
    </header>
  );
};

export default Header;
