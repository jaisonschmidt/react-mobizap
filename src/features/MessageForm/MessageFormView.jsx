import React from 'react';

import './MessageForm.scss';

const MessageFormView = props => {
  const { handleSubmitForm } = props;
  return (
    <form className="MessageForm container-fluid ws" onSubmit={handleSubmitForm}>
      <input className="-messageinput" type="text" name="txtMessage" required />
      <button type="submit" className="btn -btnsend">
        Enviar
      </button>
    </form>
  );
};

export default MessageFormView;
