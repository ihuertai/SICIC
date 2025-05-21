import './Sucursal1.css';

import BarrelDiv from '../../../components/barril';
import CustomCard from '../../../components/card';
import Header from '../../../components/header';

function Sucursal1() {
  const tanks = [
    { name: "Biodisel", capacity: 10000, current: 6200 },
    { name: "Combustoleo", capacity: 8000, current: 4700 },
    { name: "Aceite crudo", capacity: 12000, current: 9800 },
    { name: "Aceite desh.", capacity: 6000, current: 3500 },
  ];

  return (
    <>
      <Header />
      <div className='mainContainer'>
        <div className='inContainer leftContainer'>
          {tanks.map((tank, index) => (
            <BarrelDiv key={index} product={`product${index + 1}`} tankName={tank.name} />
          ))}
        </div>
        <div className='inContainer rightContainer'>
          <div className='cardContainer'>
            <CustomCard>
              <h1>Tanque / Producto</h1>
              <ul>
                {tanks.map((tank, index) => (
                  <li key={index}>
                    {tank.name} — Capacidad máx: {tank.capacity} L
                  </li>
                ))}
              </ul>
            </CustomCard>
          </div>
          <div className='cardContainer'>
            <CustomCard>
              <h1>Cant. Producto</h1>
              <ul>
                {tanks.map((tank, index) => {
                  const percentage = ((tank.current / tank.capacity) * 100).toFixed(1);
                  return (
                    <li key={index}>
                      {tank.name}: {tank.current} L ({percentage}%)
                    </li>
                  );
                })}
              </ul>
            </CustomCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sucursal1;
