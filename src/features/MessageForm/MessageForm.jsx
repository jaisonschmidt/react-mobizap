/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import MessageFormView from './MessageFormView';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault(e);

    const message = e.target.txtMessage.value;
    const { db, user } = this.props;
    const { displayName, email, uid } = user;

    db.collection('chat').add({
      user: {
        displayName,
        email,
        uid,
      },
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    e.target.txtMessage.value = '';
  }

  render() {
    return <MessageFormView handleSubmitForm={this.handleSubmitForm} />;
  }
}

export default MessageForm;
