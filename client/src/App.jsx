import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
