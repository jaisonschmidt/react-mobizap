/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import { FirebaseAuthProvider, FirebaseAuthConsumer } from '@react-firebase/auth';

import config from '../../config';

import LoginView from './LoginView';

class Login extends React.Component {
  handleGoogleButtonClick() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  }

  handleUserLoggedIn(isSignedIn) {
    console.log(isSignedIn);
    this.props.handleAuthenticated(isSignedIn);
  }

  render() {
    return (
      <div>
        <FirebaseAuthProvider {...config} firebase={firebase}>
          <LoginView handleGoogleButtonClick={this.handleGoogleButtonClick} />

          <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
              if (isSignedIn) this.handleUserLoggedIn(isSignedIn);
            }}
          </FirebaseAuthConsumer>
        </FirebaseAuthProvider>
      </div>
    );
  }
}

export default Login;
