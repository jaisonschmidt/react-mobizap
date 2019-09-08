import React from 'react';

const HeaderView = props => {
  const { firebase } = props;
  return (
    <header className="container-fluid ws Header">
      <div className="-logo">Mobizap</div>
      <div>
        <button
          type="button"
          className="btn"
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sair
        </button>
      </div>
    </header>
  );
};

export default HeaderView;
