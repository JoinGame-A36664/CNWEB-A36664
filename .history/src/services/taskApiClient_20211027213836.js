import { api } from "./api";

export const GetListTaskRequest = () => {
          api.Creat().then(response => {
                    const { data } = response;
                    const { token } = data;
                    console.log('token ', token);
                    StorageUtils.setItem('token', token);
                    window.location.replace('/');

          })
                    .catch((error) => {
                              const { message } = error;
                              console.log('error: ', message);
                    });
}

