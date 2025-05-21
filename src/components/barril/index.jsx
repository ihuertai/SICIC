import './style.css';

import React, { useEffect, useRef } from 'react';

export default function BarrelDiv({product}) {

  return (
    <div className="barrel-container">
      <div className="barrel">
        <div className={`water ${product}`}></div>
      </div>
    </div>
  );
}