import axios from 'axios'
var baseUrl = 'http://localhost:9090/'

function fetchUser (params) {
  return axios.get(baseUrl + 'user/' + params.userId, {})
}

function authUser (params) {
  var url = baseUrl + 'user/login'
  return axios.post(url, params)
}

function initUser (params) {
  var url = baseUrl + 'user'
  return axios.post(url, params)
}

export { fetchUser, initUser, authUser}
