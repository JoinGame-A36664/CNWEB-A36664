import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../components/main/Header.css'
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="btn btn-primary ml-30" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
}

export default LoginButton
