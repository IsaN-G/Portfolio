import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* 1. Der pulsierende äußere Ring (Aura) */}
      <div className={`
        absolute inset-0 rounded-full bg-pink-500/20 blur-xl transition-all duration-500 animate-pulse
        ${isPointer ? "w-16 h-16 opacity-100" : "w-8 h-8 opacity-0"}
      `} style={{ transform: "translate(-50%, -50%)" }} />

      {/* 2. Der moderne "Ghost" Ring (nur bei Hover) */}
      <div className={`
        absolute inset-0 rounded-full border border-pink-500/50 transition-all duration-300
        ${isPointer ? "w-12 h-12 opacity-100 scale-110" : "w-0 h-0 opacity-0 scale-50"}
      `} style={{ transform: "translate(-50%, -50%)" }} />

      {/* 3. Der feste Kern (der eigentliche Punkt) */}
      <div className={`
        rounded-full transition-all duration-200 ease-out
        ${isClicked ? "scale-50 opacity-50" : "scale-100"}
        ${isPointer ? "w-2 h-2 bg-white" : "w-3 h-3 bg-pink-600 shadow-[0_0_15px_rgba(219,39,119,0.8)]"}
      `} style={{ transform: "translate(-50%, -50%)", mixBlendMode: "difference" }} />
    </div>
  );
};

export default CustomCursor;