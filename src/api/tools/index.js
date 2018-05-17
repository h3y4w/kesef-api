function handleResponse (promise, cb, cbError) {
  var cbErrorRun = (cbError && typeof cb === 'function')
  promise.then(function (response) {
    if (!response.error) {
      cb(response)
    } else if (cbErrorRun) {
      cbError(response)
    }
  }).catch(function (error) {
    console.log(error)
    if (cbErrorRun) {
      var responseError = {
        'status': 404,
        'error': true,
        'message': error.toString()
      }
      cbError(responseError)
    }
  })
}


export {handleResponse}
