import React from 'react';

import './Chat.scss';

import Header from '../../features/Header/Header';
import MessageList from '../../features/MessageList/MessageList';
import MessageForm from '../../features/MessageForm/MessageForm';

import MessageMoc from '../../features/MessageList/MessageListMoc';

const Chat = props => {
  const { firebaseApp, user, signOut } = props;
  const db = firebaseApp.firestore();
  return (
    <div className="Chat">
      <Header signOut={signOut} />
      <MessageList messages={MessageMoc} db={db} />
      <MessageForm firebaseApp={firebaseApp} db={db} user={user} />
    </div>
  );
};

export default Chat;
