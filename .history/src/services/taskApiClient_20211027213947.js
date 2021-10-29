import { api } from "./api";

export const GetListTaskRequest = () => {
          api.Creat().then(response => {
                    const { data } = response;
                console.log(da);


          }).catch((error) => {
                    const { message } = error;
                    console.log('error: ', message);
          });
}

