import React, { Component } from 'react';
import {
          BrowserRouter, Switch,
          Route, Redirect,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import NotFound from "./containers/notFound/NotFound";
import Main from "./containers/main/Main";
import LoginButton from './containers/login/Login';

fucntion App() {
          const { isLoading } = useAuth0();
};

export default App;
