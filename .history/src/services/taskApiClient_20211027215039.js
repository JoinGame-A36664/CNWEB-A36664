import callApi from '../services/apiCaller'

export const GetListTaskRequest = () => {
          return callApi(`products/${id}`, 'GET', null).then(res => {
                    console.log((actGetProduct(res.data));
          });
}

