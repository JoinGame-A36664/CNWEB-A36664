import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
          const { logout, isAuthenticated } = useAuth0();

          return (
                    isAuthenticated && (
                              
                              <button type="button"
                              onClick={() => logout()}
                              className="btn btn-primary me-3 ">Log Out</button>
                              
                          
                    )
          )
}

export default Logout
