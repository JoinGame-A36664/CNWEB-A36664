import React, { Component } from 'react';
import App from '../../App';
import { Auth0Provider } from '@auth0/auth0-react';
import * as Config from '../Config';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
          const { loginWithRedirect, isAuthenticated } = useAuth0();

          return (
                    !isAuthenticated && (
                              <button onClick={() => loginWithRedirect()}>
                                        Log In
                              </button>
                    )
          )
}

export default Login;
