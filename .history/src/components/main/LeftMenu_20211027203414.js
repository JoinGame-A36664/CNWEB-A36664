import React, { Component } from 'react';
import {
          Wrapper, Avata, TextField, ButtonLogout, Blank,
} from './leftMenuStyle';
import Images from '../../asset/images';
import Logout from '../../containers/Authen/Logout';
import { useAuth0 } from "@auth0/auth0-react";

const LeftMenu = () => {
          const { user, isAuthenticated, isLoading } = useAuth0();
          if (isLoading ) {
                    return <div>Loading ...</div>;
          }

          else (isAuthenticated){

          }
     

}

export default LeftMenu;
