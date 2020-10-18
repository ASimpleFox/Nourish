import React from 'react';
import './App.css';
import Dashboard from './Dashboard.js';
import ImageUpload from './ImageUpload.js'
import Profile from './Profile.js'
import Login from './Login.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
    HOME_ROUTE,
    IMAGE_ROUTE,
    PROFILE_ROUTE,
    LOGIN_ROUTE,
    DEFAULT
} from './routes'

function App() {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route exact path={HOME_ROUTE} component={Dashboard} />
                  <Route exact path={IMAGE_ROUTE} component={ImageUpload} />
                  <Route exact path={PROFILE_ROUTE} component={Profile} />
                  <Route exact path={DEFAULT} component={Dashboard} />
                  <Route exact path={LOGIN_ROUTE} component={Login} />
              </Switch>
          </Router>
    </div>
  );
}

export default App;
