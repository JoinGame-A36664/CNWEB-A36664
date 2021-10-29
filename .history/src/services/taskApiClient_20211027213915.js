import { api } from "./api";

export const GetListTaskRequest = () => {
          api.Creat().then(response => {
                    const { data } = response;
                 
                    return data;


          }) .catch((error) => {
                              const { message } = error;
                              console.log('error: ', message);
                    });
}

