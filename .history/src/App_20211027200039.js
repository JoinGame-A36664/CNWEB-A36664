import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './containers/Authen/Login';

function App() {
          const { isLoading } = useAuth0();

          if (isLoading) return <div>Loading...</div>

          return (
                    <>
                            <Login></Login>
                    </>
          );
}

export default App;
