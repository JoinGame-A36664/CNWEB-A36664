import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../components/main/'
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="btn btn-primary" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
}

export default LoginButton
