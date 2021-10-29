import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
          const { logout, isAuthenticated } = useAuth0();

          return (
                    isAuthenticated && (
                              
                              <button type="button" className="btn btn-default">Log Out</button>
                              
                              <button >
                                        Log Out
                              </button>
                    )
          )
}

export default Logout
