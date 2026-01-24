import React from 'react';

const Header = () => {
  return (
    <header className="relative w-full h-[500px] overflow-hidden">
    
      <video
        className="absolute top-0 left-0 w-full h-full object-cover grayscale"
        src="/Video/header.mp4" 
        autoPlay
        muted
        loop
      />
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white bg-black/30">
        <div className="border-4 border-pink-600 px-20 py-60">  
          <h1 className="text-5xl font-bold text-pink-600 uppercase">Willkommen!</h1>  
          <p className="mt-4 text-xl text-pink-600">Isabelle Nauber-Gelhaar</p>  
        </div>
      </div>
    </header>
  );
};

export default Header;
