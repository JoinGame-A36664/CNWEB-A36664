import * as Config from '../containers/Config';
import axios from 'axios';

export default function callApi(endpoint, method = 'GET', body) {
          return axios({
                    method: method,
                    url: `${Config.API_URL}/${endpoint}`,
                    data: body
          }).catch(err => {
                    console.log(err);
          });
};