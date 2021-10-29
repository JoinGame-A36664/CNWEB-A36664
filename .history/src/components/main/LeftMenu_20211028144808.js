
import {
          Wrapper, Avata, TextField, Blank,
} from './leftMenuStyle';

import Logout from '../../containers/Authen/Logout';
import { useAuth0 } from "@auth0/auth0-react";


function LeftMenu  (props)  {
          const { user, isAuthenticated, isLoading } = useAuth0();
          if (isLoading) {
                    return <div>Loading ...</div>;
          }
       
          return (
                    <Wrapper id="LeftMenu">
                              <Avata src={user?.picture} alt="avatar" />
                              <TextField>{user?.name}</TextField>
                              <TextField>Point: { props.point }</TextField>
                              <TextField>Test complete:{ }</TextField>
                              <TextField>Test not complete: 42</TextField>
                              <Blank />
                              <Logout></Logout>
                    </Wrapper>
          )

}

export default LeftMenu;
