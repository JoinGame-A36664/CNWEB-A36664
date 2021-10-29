import React, { Component } from 'react';
import App from '../../App';
import { Auth0Provider } from '@auth0/auth0-react';
import * as Config from '../Config';
class Login extends Component {
          constructor(props) {
                    super(props);
                    this.state = {
                              userName: '',
                              password: 0,
                    }
                  
          }

      

          render() {
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
