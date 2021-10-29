import callApi from '../services/apiCaller'

export const GetListTaskRequest = () => {
          return callApi(`products/${id}`, 'GET', null).then(res => {
                    dispatch(actGetProduct(res.data));
          });
}

