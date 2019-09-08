/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable class-methods-use-this */
import React from 'react';

import './assets/scss/theme.scss';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { FirebaseAuthProvider, FirebaseAuthConsumer } from '@react-firebase/auth';
import config from './config';

import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';

class App extends React.Component {
  handleClickLogin() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  }

  render() {
    return (
      <FirebaseAuthProvider {...config} firebase={firebase}>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user }) => {
            if (isSignedIn) {
              return <Chat firebase={firebase} user={user} />;
            }
            return <Login handleClickLogin={this.handleClickLogin} />;
          }}
        </FirebaseAuthConsumer>
      </FirebaseAuthProvider>
    );
  }
}

export default App;
