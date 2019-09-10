import React from 'react';

import Message from '../Message/Message';

import './MessageList.scss';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    const { db } = this.props;
    db.collection('chat')
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

  render() {
    const { messages } = this.state;
    return (
      <div className="MessageList">
        {messages.map(message => {
          console.log(message);
          return <Message message={message} key={message.id} />;
        })}
      </div>
    );
  }
}

export default MessageList;
