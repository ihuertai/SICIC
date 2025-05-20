import './style.css'

import React, { useRef } from 'react';

import laPaz from '../../assets/laPaz.png';
import obregon from '../../assets/obregon.png';
import tijuana from '../../assets/tijuana.png';
import { useNavigate } from 'react-router-dom';

export default function CardCarousel() {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const goObregon = () => {
    navigate("/obregon");
  };

  const goTijuana = () => {
    navigate("/tijuana");
  };

  const goLaPaz = () => {
    navigate("/laPaz");
  };

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="carousel-wrapper">
      <button className="btn left" onClick={scrollLeft}>&#10094;</button>
      <div className="carousel" ref={carouselRef}>
        <div className="card obregon">
          <h2>Cd. Obregón</h2>
          <button onClick={goObregon}>Inventario</button>
        </div>
        <div className="card laPaz">
          <h2>La Paz</h2>
          <button onClick={goLaPaz}>Inventario</button>
        </div>
        <div className="card tijuana">
          <h2>Tijuana</h2>
          <button onClick={goTijuana}>Inventario</button>
        </div>
      </div>
      <button className="btn right" onClick={scrollRight}>&#10095;</button>
    </div>
  );
}
