import React, { Component } from 'react';
import App from '../../App';
import { Auth0Provider } from '@auth0/auth0-react';
import * as Config from '../Config';
class Login extends Component {

          render() {
               
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
