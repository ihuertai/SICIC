import './style.css';

import React, { useEffect, useRef } from 'react';

export default function BarrelDiv({product, tankName}) {

  return (
    <div className="barrel-container">
      <div className="barrel">
        <div className={`water ${product}`}>
          <p>{tankName}</p>
        </div>
      </div>
    </div>
  );
}