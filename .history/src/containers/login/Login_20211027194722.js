import React, { Component } from 'react';
import App from '../../App';
import { Auth0Provider } from '@auth0/auth0-react';
import * as Config from '../Config';
import { useAuth0 } from '@auth0/auth0-react';
const Login extends Component {

          render() {
                    const { loginWithRedirect, isAuthenticated } = useAuth0();

                    const domain = 'dev-5xufpw6b.us.auth0.com';
                    const clientId = 'XARoTpc0jXYTbj7zkibm1vdx804GCi3Z';
                    const redirectUri = 'http://localhost:4200'
                    return (
                              <Auth0Provider
                                        domain={domain}
                                        clientId={clientId}
                                        redirectUri={redirectUri}>
                                        <App />
                              </Auth0Provider>
                    )
          }
}

export default Login;
