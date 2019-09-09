import React from 'react';

import './Message.scss';

const MessageView = props => {
  const { message } = props;
  return (
    <div className="Message">
      <div className="-from">{message.from}</div>
      <div className="-date">{message.date}</div>
      <div className="-message">{message.message}</div>
    </div>
  );
};

export default MessageView;
