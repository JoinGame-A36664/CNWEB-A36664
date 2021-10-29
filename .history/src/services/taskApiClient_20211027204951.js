import callApi from "./apiCaller";

export const GetListTaskRequest = () => {
          return dispatch => {
                    return callApi('products', 'GET', null).then(res => {
                              con
                    });
          };
}