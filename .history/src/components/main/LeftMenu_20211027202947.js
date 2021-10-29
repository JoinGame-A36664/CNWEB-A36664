import React , { Component } from 'react';
import {
    Wrapper, Avata, TextField, ButtonLogout, Blank,
} from './leftMenuStyle';
import Images from '../../asset/images';
import Logout from '../../containers/Authen/Logout';
import { useAuth0 } from "@auth0/auth0-react";

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <Wrapper id="LeftMenu">
            <Avata src={Images.avataDefault} alt="avata" />
            <TextField>userName</TextField>
            <TextField>Point: 2430</TextField>
            <TextField>Test complete: 29</TextField>
            <TextField>Test not complete: 42</TextField>
            <Blank />
          <Logout></Logout>
        </Wrapper>
    )
  }
}

export default LeftMenu;
