import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
          const { loginWithRedirect, isAuthenticated } = useAuth0();

          return (
                    !isAuthenticated && (
                              
                              <button type="button" class="btn btn-success">button</button>
                              
                              <button onClick={() => loginWithRedirect()}>
                                        Log In
                              </button>
                    )
          )
}

export default Login
