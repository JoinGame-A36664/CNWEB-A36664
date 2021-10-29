import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './containers/Authen/Login';
import Logout from './containers/Authen/Logout';

function App() {
          const { isLoading } = useAuth0();

          if (isLoading) return <div>Loading...</div>

          return (
                    <>
                              <Login></Login>
                              <Logout></Logout>
                    </>
          );
}

export default App;
