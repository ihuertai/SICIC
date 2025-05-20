import './App.css';

import { Route, Routes } from 'react-router-dom';

import Inventarios from './pages/Inventarios/Inventarios';
import Loading from './pages/Loading/Loading';
import Login from './pages/Login/Login';
import Movimientos from './pages/Movimientos/Movimientos'
import Registro from './pages/Registro/Registro';
import Sucursal1 from './pages/Sucursales/Sucursal1/Sucursal1';
import Sucursal2 from './pages/Sucursales/Sucursal2/Sucursal2';
import Sucursal3 from './pages/Sucursales/Sucursal3/Sucursal3'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inventarios" element={<Inventarios />} />
        <Route path="/movimientos" element={<Movimientos />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/obregon" element={<Sucursal1 />} />
        <Route path="/tijuana" element={<Sucursal2 />} />
        <Route path="/laPaz" element={<Sucursal3 />} />
        {/* Redirección para rutas desconocidas */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;
