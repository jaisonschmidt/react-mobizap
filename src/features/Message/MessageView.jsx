import React from 'react';

import './Message.scss';

const MessageView = props => {
  const { message } = props;
  return message.data !== undefined ? (
    <div className="Message">
      <div className="-from">{message.data.user.displayName}</div>
      <div className="-message">{message.data.message}</div>
    </div>
  ) : null;
};

export default MessageView;
