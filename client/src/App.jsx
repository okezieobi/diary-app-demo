import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/layouts/Home';
import Signup from './components/containers/Signup';
import Signin from './components/containers/Signin';
import HomeDash from './components/containers/HomeDash';
import ContentDash from './components/containers/ContentDash';
import ComposeForm from './components/containers/Compose';

function AppTest() {
  return (
    <Switch>
      <Route path="/home/entry/compose">
        <ComposeForm />
      </Route>
      <Route path="/home/entry">
        <ContentDash />
      </Route>
      <Route path="/home">
        <HomeDash />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppTest />
    </BrowserRouter>
  );
}

export { App, AppTest };
