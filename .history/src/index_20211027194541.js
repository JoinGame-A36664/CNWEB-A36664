import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
const domain = 'dev-5xufpw6b.us.auth0.com';
const clientId = 'XARoTpc0jXYTbj7zkibm1vdx804GCi3Z';
const redirectUri = 'http://localhost:4200'
ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
