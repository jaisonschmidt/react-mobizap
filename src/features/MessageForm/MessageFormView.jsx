import React from 'react';

import './MessageForm.scss';

const MessageFormView = () => {
  return (
    <form className="MessageForm container-fluid ws">
      <input className="-messageinput" type="text" />
      <button type="button" className="btn -btnsend">
        Enviar
      </button>
    </form>
  );
};

export default MessageFormView;
