import callApi from "./apiCaller";

export const GetListTaskRequest = () => {
          return dispatch => {
                    return callApi('tas', 'GET', null).then(res => {
                              con
                    });
          };
}