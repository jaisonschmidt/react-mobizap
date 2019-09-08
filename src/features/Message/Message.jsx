import React from 'react';

import MessageView from './MessageView';

const Message = props => {
  const { message } = props;
  return <MessageView message={message} />;
};

export default Message;
