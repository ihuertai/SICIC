import './style.css';

import { Link } from 'react-router-dom';
import logo from '../../assets/diseltec_logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/"><h1>SICIC</h1></Link>
        </div>
        <nav className="nav">
          <Link to="/inventarios">INICIO</Link>
          <Link to="/movimientos">MOVIMIENTOS</Link>
          <Link to="/clientes">CLIENTES</Link>
          <Link to="/empleados">EMPLEADOS</Link>
          <Link to="/productos">PRODUCTOS</Link>
          <Link to="/perfil">PERFIL</Link>
        </nav>
      </div>
    </header>
  );
}
