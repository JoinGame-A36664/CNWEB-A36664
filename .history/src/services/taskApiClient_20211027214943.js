import api from '../services/apiCaller'

export const GetListTaskRequest = () => {
          api.create().then(response => {
                    const { data } = response;
                    console.log(data);


          }).catch((error) => {
                    const { message } = error;
                    console.log('error: ', message);
          });
}

