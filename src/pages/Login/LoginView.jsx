import React from 'react';

function LoginView(props) {
  const { handleGoogleButtonClick } = props;

  return (
    <button type="button" onClick={handleGoogleButtonClick}>
      Google Login
    </button>
  );
}

export default LoginView;
