import React from 'react';

import './Chat.scss';

import Header from '../../features/Header/Header';
import MessageList from '../../features/MessageList/MessageList';
import MessageForm from '../../features/MessageForm/MessageForm';

import MessageMoc from '../../features/MessageList/MessageListMoc';

const Chat = props => {
  const { firebase } = props;
  return (
    <div className="Chat">
      <Header firebase={firebase} />
      <MessageList messages={MessageMoc} />
      <MessageForm />
    </div>
  );
};

export default Chat;
