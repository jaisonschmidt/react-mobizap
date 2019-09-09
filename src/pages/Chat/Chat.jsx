import React from 'react';

import './Chat.scss';

import Header from '../../features/Header/Header';
import MessageList from '../../features/MessageList/MessageList';
import MessageForm from '../../features/MessageForm/MessageForm';

import MessageMoc from '../../features/MessageList/MessageListMoc';

const Chat = props => {
  const { firebase, user } = props;
  return (
    <div className="Chat">
      {console.log(user)}
      <Header firebase={firebase} />
      <MessageList messages={MessageMoc} />
      <MessageForm firebase={firebase} user={user} />
    </div>
  );
};

export default Chat;
