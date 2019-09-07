import React from 'react';

import './assets/scss/theme.scss';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: false,
    };
  }

  render() {
    const { auth } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chat" render={() => (auth ? <Chat /> : <Redirect to="/" />)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
