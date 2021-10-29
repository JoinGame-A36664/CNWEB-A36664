import callApi from "./apiCaller";

export const GetListTaskRequest = () => {
          return {
                    return callApi('task', 'GET', null).then(res => {
                              dispatch(console.log(res.data))
          });
};
}

