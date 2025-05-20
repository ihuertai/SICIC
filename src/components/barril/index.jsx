import './style.css';

import React, { useEffect, useRef } from 'react';

export default function BarrelDiv() {
  const waterRef = useRef(null);

  useEffect(() => {
    const animateWater = () => {
      if (waterRef.current) {
        waterRef.current.style.transform = `translateY(${Math.sin(Date.now() / 300) * 3}px)`;
      }
      requestAnimationFrame(animateWater);
    };
    animateWater();
  }, []);

  return (
    <div className="barrel-container">
      <div className="barrel">
        <div className="water" ref={waterRef}></div>
      </div>
    </div>
  );
}