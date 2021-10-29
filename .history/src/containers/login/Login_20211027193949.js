import React, { Component } from 'react';
import App from '../../App';
import api from "../../services/api";
import StorageUtils from '../../helpers/StorageUtils';
import { Auth0Provider } from '@auth0/auth0-react';
import * as Config from '../Config';
class Login extends Component {
          constructor(props) {
                    super(props);
                    this.state = {
                              userName: '',
                              password: 0,
                    }
                    this.handleUserName1 = this.handleUserName.bind(this);
                    this.handlePassword1 = this.handlePassword.bind(this);
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
