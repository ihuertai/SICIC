//import './index.css';

//import App from './App.jsx';
//import { BrowserRouter as Router } from 'react-router-dom';
//// main.jsx
//import { StrictMode } from 'react';
//import { createRoot } from 'react-dom/client';

//createRoot(document.getElementById('root')).render(
//  <StrictMode>
//    <Router>
//      <App />
//    </Router>
//  </StrictMode>
//);

import './index.css';

import App from './App.jsx';
// Antes: import { BrowserRouter as Router } from 'react-router-dom';
// Ahora: Importa HashRouter y úsalo directamente o con un alias si lo prefieres
import { HashRouter as Router } from 'react-router-dom'; // <--- CAMBIO AQUÍ: de BrowserRouter a HashRouter

// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* <--- Este 'Router' ahora se refiere a HashRouter debido al alias */}
      <App />
    </Router>
  </StrictMode>
);

