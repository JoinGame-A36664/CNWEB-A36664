

export const GetListTaskRequest = () => {
          return dispatch => {
                    return callApi('products', 'GET', null).then(res => {
                              dispatch(actFetchProducts(res.data));
                    });
          };
}