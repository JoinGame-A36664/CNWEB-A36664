import callApi from "./apiCaller";

export const GetListTaskRequest = () => {

          return callApi('task', 'GET', null).then(res => {
                    console.log(res.data);

          };
}

