import './Registro.css';

import CustomCard from '../../components/card';
import CustomInput from '../../components/loginInput';
import LoginBtn from '../../components/loginBtn';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function LoginCard() {

  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  const goLogin = (e) => {
    e.preventDefault();
    setIsRegistering(!isRegistering);
    setTimeout(() => {
      navigate('/');
    }, 600);
  };

  const goRegister = () => {
    setIsRegistering(!isRegistering);
    setTimeout(() => {
      navigate('/');
    }, 600);
  };

  return (
    <section>
      <div className='cardContainer'>
        <div className='miniCard2'>
          <CustomCard>
            <div className="leftText">
              <h2>Registro</h2>
              <form onSubmit={goLogin}>
                <CustomInput placeholder="Email" inputType={'email'} name="email" required />
                <CustomInput placeholder="Password" inputType='password' name="password" required />
                <CustomInput placeholder="Token" inputType='password' name="password" required />
                <div className='btnContainer'>
                  <LoginBtn text={'Registarse'} variant='primary' type='submit' />
                </div>
              </form>
            </div>
          </CustomCard>
        </div>
        <div className={`miniCard1 ${isRegistering ? 'slide-left' : ''}`}>
          <CustomCard>
            <div className="centeredText">
              <h2>¡Ya casi!</h2>
              <p>SICIC una plataforma hecha a tu medida</p>
              <LoginBtn text={'INICIAR SESIÓN'} variant={'secondary'} onClick={goRegister} />
            </div>
          </CustomCard>
        </div>
      </div>
    </section>
  );
}
