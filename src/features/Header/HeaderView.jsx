import React from 'react';

const HeaderView = props => {
  const { signOut } = props;
  return (
    <header className="container-fluid ws Header">
      <div className="-logo">Mobizap</div>
      <div>
        <button type="button" className="btn" onClick={signOut}>
          Sair
        </button>
      </div>
    </header>
  );
};

export default HeaderView;
