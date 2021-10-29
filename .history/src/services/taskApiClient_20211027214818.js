import api from './'

export const GetListTaskRequest = () => {
          api.Creat().then(response => {
                    const { data } = response;
                    console.log(data);


          }).catch((error) => {
                    const { message } = error;
                    console.log('error: ', message);
          });
}

