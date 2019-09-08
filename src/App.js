import React from 'react';

import './assets/scss/theme.scss';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: false,
    };

    this.handleAuthenticated = this.handleAuthenticated.bind(this);
  }

  handleAuthenticated(auth) {
    console.log('aaaaaaaa', auth);
    this.setState({ auth });
  }

  render() {
    const { auth } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Login handleAuthenticated={this.handleAuthenticated} />}
            />
            <Route path="/chat" render={() => (auth ? <Chat /> : <Redirect to="/" />)} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
