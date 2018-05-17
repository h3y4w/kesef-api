import { fetchUser, initUser , authUser} from '@/api/user'

const defaultState = {
  user: null
}

const actions = {
  getUser: (context, params) => {
    fetchUser(params)
      .then(function (response) {
        console.log(response)
        // this is where you run cb func
      })
      .catch(function (error) {
        console.log(error)
      })
  },


  loginUser: (context, params) => {
    authUser(params)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  },

  createUser: (context, params) => {
    initUser(params)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}

export default {
  state: defaultState,
  actions
}
