import './style.css';

import CustomCard from '../card';
import CustomInput from '../loginInput';
import LoginBtn from '../loginBtn';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function LoginCard() {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  const goIndex = (e) => {
    e.preventDefault();
    navigate("/inventarios");
  };

  const goRegister = () => {
    setIsRegistering(!isRegistering);
    setTimeout(() => {
      navigate('/registro');
    }, 600); // Espera de 3 segundos antes de navegar
  };


  return (
    <div className='cardContainer'>
      <div className={`miniCard1 ${isRegistering ? 'slide-right' : ''}`}>
        <CustomCard>
          <div className="centeredText">
            <h2>Bienvenido</h2>
            <p>SICIC una plataforma hecha a tu medida</p>
            <LoginBtn text={'REGISTRARSE'} variant={'secondary'} onClick={goRegister} />
          </div>
        </CustomCard>
      </div>
      <div className='miniCard2'>
        <CustomCard>
          <div className="leftText">
            <h2>Inicia Sesión</h2>
            <form onSubmit={goIndex}>
              <CustomInput placeholder="Email" inputType={'email'} name="email" required />
              <CustomInput placeholder="Password" inputType='password' name="password" required />
              <div className='btnContainer'>
                <LoginBtn text={'Iniciar Sesión'} variant='primary' type='submit' />
              </div>
            </form>
          </div>
        </CustomCard>
      </div>
    </div>
  );
}
