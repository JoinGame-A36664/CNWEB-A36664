import callApi from "./apiCaller";

export const GetListTaskRequest = () => {
          return dispatch => {
                    return callApi('task', 'GET', null).then(res => {
                              con
                    });
          };
}