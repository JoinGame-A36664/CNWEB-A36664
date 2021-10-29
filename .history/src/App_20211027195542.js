import React, { Component } from 'react';
import {
          BrowserRouter, Switch,
          Route, Redirect,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from "./containers/login/Login";
import NotFound from "./containers/notFound/NotFound";
import Main from "./containers/main/Main";
import LoginButton from './containers/login/Login';

const App = () => {
          return (
                    <BrowserRouter>
                              <Switch>
                                        <PrivateRoute exact path="/" component={Main} />
                                      <LoginButton
                                        <Route component={NotFound} />
                              </Switch>
                    </BrowserRouter>
          );
};

export default App;
