import axios from 'axios'
import { handleResponse} from '@/api/tools'


var baseUrl = 'http://localhost:9090/'


function fetchStock (params, cb, cbError = null) {
  var promise = axios.get(baseUrl + 'stock/' + params.id, {})
  handleResponse(promise, cb, cbError)
}

function initStock (params) {
  var url = baseUrl + 'stock/'
  return axios.post(url, params)
}

export { fetchStock, initStock}
