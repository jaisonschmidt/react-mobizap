import React from 'react';

import Message from '../Message/Message';

import './MessageList.scss';

const MessageList = props => {
  const { messages } = props;
  return (
    <div className="MessageList">
      {messages.map(message => (
        <Message message={message} />
      ))}
    </div>
  );
};

export default MessageList;
