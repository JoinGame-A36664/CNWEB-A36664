import React, { Component } from 'react';
import App from './App';
import api from "../../services/api";
import StorageUtils from '../../helpers/StorageUtils';
import { Auth0Provider } from '@auth0/auth0-react';
import { configure } from '../Config';
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

          login = () => {
                    const params = {
                              userName: this.state.userName,
                              password: this.state.password,
                    };

                    api.create().login(params)
                              .then(response => {
                                        const { data } = response;
                                        const { token } = data;
                                        console.log('token ', token);
                                        StorageUtils.setItem('token', token);
                                        window.location.replace('/');

                              })
                              .catch((error) => {
                                        const { message } = error;
                                        console.log('error: ', message);
                              });
          }

          getUserInfo() {
                    api.create().getUserInfo(16)
                              .then(response => {
                                        console.log('response = ', response);
                              })
                              .catch((error) => {
                                        const { message } = error;
                                        console.log('error: ', message);
                              });
          }

          handleUserName(event) {
                    this.setState({ userName: event.target.value })
          }

          handlePassword(event) {
                    this.setState({ password: event.target.value })
          }

          render() {
                    return (
                              <Auth0Provider
                                        domain={configure.domain}
                                        clientId={configure.clientId}
                                        redirectUri={configure.redirectUri}>
                                        <App />
                              </Auth0Provider>
                    )
          }
}

export default Login;
