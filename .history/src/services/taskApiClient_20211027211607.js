// import apiCaller from "./apiCaller";

export const GetListTaskRequest = () => {
          return dispatch => {
                    return apiCaller('task', 'GET', null).then(res => {
                              dispatch(console.log(res.data))
          });
};
}

