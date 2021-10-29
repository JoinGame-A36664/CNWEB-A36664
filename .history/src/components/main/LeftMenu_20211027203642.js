
import {
          Wrapper, Avata, TextField, Blank,
} from './leftMenuStyle';

import Logout from '../../containers/Authen/Logout';
import { useAuth0 } from "@auth0/auth0-react";

const LeftMenu = () => {
          const { user, isAuthenticated, isLoading } = useAuth0();
          if (isLoading ) {
                    return <div>Loading ...</div>;
          }

          else {
                    
     }
                  

     

}

export default LeftMenu;
