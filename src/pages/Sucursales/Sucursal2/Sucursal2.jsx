import './Sucursal2.css';

import BarrelDiv from '../../../components/barril';
import Header from '../../../components/header';

function Sucursal2() {

  return (
    <>
      <Header />
      <div className='mainContainer'>
        <div className='inContainer leftContainer'>
          <BarrelDiv product={'product1'} />
          <BarrelDiv product={'product2'} />
          <BarrelDiv product={'product3'} />
          <BarrelDiv product={'product4'} />
        </div>
        <div className='inContainer rightContainer'>
        </div>
      </div>
    </>
  )
}

export default Sucursal2;