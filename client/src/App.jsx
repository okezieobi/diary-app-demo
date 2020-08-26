import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Signup from './components/Signup';
import './App.css';

function AppTest() {
  return (
      <Switch>
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
  )
}

export { App, AppTest };
