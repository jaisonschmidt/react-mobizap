/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';

import MessageFormView from './MessageFormView';

import firebase from '../../firebase';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault(e);
    console.log(e.target.txtMessage.value);
    e.target.txtMessage.value = '';
    const db = this.props.firebase.firestore();
    db.collection('users').add({
      user: 'last test',
    });
  }

  render() {
    return <MessageFormView handleSubmitForm={this.handleSubmitForm} />;
  }
}

export default MessageForm;
