/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable class-methods-use-this */
import React from 'react';

import './assets/scss/theme.scss';

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from './config';

import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';

const firebaseApp = firebase.initializeApp(config);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends React.Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <>
        {user ? (
          <Chat signOut={signOut} firebaseApp={firebaseApp} user={user} />
        ) : (
          <Login signInWithGoogle={signInWithGoogle} />
        )}
      </>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
