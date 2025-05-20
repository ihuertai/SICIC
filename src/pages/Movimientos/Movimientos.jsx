import './Movimientos.css';

import BarrelDiv from '../../components/barril';
import EnhancedReactTable from '../../components/table';
import Header from '../../components/header';
import LoginCard from '../../components/loginCard';

function Movimientos() {

  const data = [
    { name: "Juan", age: 25, email: "juan@example.com" },
    { name: "Ana", age: 30, email: "ana@example.com" },
    { name: "Luis", age: 22, email: "luis@example.com" },
  ];

  return (
    <>
      <Header />
      <div className="movimientos-container">
        <EnhancedReactTable data={data} />
      </div>
    </>
  );
}

export default Movimientos;