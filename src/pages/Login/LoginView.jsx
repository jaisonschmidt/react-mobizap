import React from 'react';

import './Login.scss';
import Logo from '../../assets/img/btn_sign_google.png';

function LoginView(props) {
  const { handleClickLogin } = props;
  return (
    <div className="container LoginView">
      <div className="-wrapperLogin">
        <div>
          <h1 className="-logo">
            <span>M</span>
            <span>obizap</span>
          </h1>
        </div>
        <div>
          <button type="button" className="-btnlogin" onClick={handleClickLogin}>
            <img src={Logo} alt="button google sign" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
