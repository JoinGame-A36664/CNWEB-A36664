import callApi from '../services/apiCaller'

export const GetListTaskRequest = () => {
          return dispatch => {
                    return callApi(''', 'GET', null).then(res => {
                              dispatch(console.log(res.data));
                    });
          }
}

