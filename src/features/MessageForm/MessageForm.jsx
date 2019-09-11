/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import MessageFormView from './MessageFormView';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleUploadChange = this.handleUploadChange.bind(this);
    this.setRef = ref => {
      this.file = ref;
    };
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
      isImage: false,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    e.target.txtMessage.value = '';
  }

  /* TODO - gerar nome unico */
  handleUploadChange() {
    const { firebaseApp, db, user } = this.props;
    const { displayName, email, uid } = user;
    const file = this.file.files[0];
    const storageRef = firebaseApp.storage().ref();
    const mainImage = storageRef.child(file.name);

    mainImage.put(file).then(() => {
      mainImage.getDownloadURL().then(url => {
        db.collection('chat').add({
          user: {
            displayName,
            email,
            uid,
          },
          isImage: url,
          message: '',
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      });
    });
  }

  render() {
    return (
      <>
        <div className="upload-btn-wrapper">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={this.handleUploadChange}
            ref={this.setRef}
            capture
          />
          <button type="button" className="btn-upload">
            Foto
          </button>
        </div>
        <MessageFormView handleSubmitForm={this.handleSubmitForm} />
      </>
    );
  }
}

export default MessageForm;
