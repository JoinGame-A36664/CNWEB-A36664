import React , { Component } from 'react';
import {
    Wrapper, PopupLoginWrapper, Text, Row,
    Input, Button, Blank,
} from "./loginStyle";
import api from "../../services/api";
import apiCaller from "../../services/apiCaller";
import StorageUtils from '../../helpers/StorageUtils';

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

  login=()=> {
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
    this.setState({ userName: event.target.value})
  }

  handlePassword(event) {
    this.setState({ password: event.target.value})
  }

  render() {
    return (
              <div>
                        
     </div>
    )
  }
}

export default Login;
