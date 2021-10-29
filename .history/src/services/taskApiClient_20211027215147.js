import callApi from '../services/apiCaller'

export const GetListTaskRequest = () => {
          return dispatch => {
                    return callApi('task','GET', null).then(res => {
                              dispatch(console.log(res.data));
                    });
          }
}

