import React from 'react';

import Message from '../Message/Message';

import './MessageList.scss';

class MessageList extends React.Component {
  constructor(props) {
    const { db } = props;

    super(props);

    this.state = {
      messages: [],
    };

    this.firestoreListener = db
      .collection('chat')
      .orderBy('timestamp', 'asc')
      .onSnapshot(docs => {
        const messages = docs.docs.map(doc => {
          return { id: doc.id, data: doc.data() };
        });

        this.setState({
          messages,
        });

        const elementSelector = document.querySelector('.MessageList');

        elementSelector.scrollTop = elementSelector.scrollHeight;
      });

    /*
    db.collection('chat')
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot.docs);
        const messages = querySnapshot.docs.map(doc => {
          return { id: doc.id, data: doc.data() };
        });

        this.setState({
          messages,
        });
        console.log('firebase data');
        console.log(messages);
      });
      */
  }

  componentWillUnmount() {
    this.firestoreListener();
  }

  /* curiosidade: https://mathiasbynens.github.io/rel-noopener/ */

  render() {
    const { messages } = this.state;
    return (
      <div className="MessageList">
        {messages.map(message => {
          return message.data.isImage ? (
            <a
              href={message.data.isImage}
              target="_blank"
              rel="noopener noreferrer"
              key={message.id}
            >
              <img src={message.data.isImage} style={{ width: '100%', padding: '10px' }} alt="" />
            </a>
          ) : (
            <Message message={message} key={message.id} />
          );
        })}
      </div>
    );
  }
}

export default MessageList;
