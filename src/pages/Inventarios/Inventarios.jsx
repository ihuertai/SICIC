import './Inventarios.css';

import BarrelDiv from '../../components/barril';
import CardCarousel from '../../components/carousel';
import CircularWaterDrop from '../../components/dropCircle';
import CustomCard from '../../components/card';
import Header from '../../components/header';
import { Link } from 'react-router-dom';
import LoginBtn from '../../components/loginBtn';
import LoginCard from '../../components/loginCard'

function Inventarios() {

  return (
    <>
      <Header />
      <div className='mainContainer'>
        <CardCarousel/>
      </div>
    </>
  )
}

export default Inventarios;