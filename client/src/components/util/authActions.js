import axios from 'axios'
import { authRequest, authSuccess, authFailure, logout } from '../../reducers/auth';

export const registerUser = (dispatch, user) => {
  axios.post('/api/v1/users', { user: {...user}})
    .then(response => {
      console.log("Create User: ", response)
      authenticate(dispatch, response.data)
    })
    .then(response => console.log("After User Createion: ", response))
    .catch(errors => console.log("Errors Registering: ", errors))
}

export const authenticate = (dispatch, user) => {
  console.log("Authentication User Param: ", user)
  dispatch(authRequest())
  axios.post('/authenticate', user)
    .then(response => {
      console.log("Auth Response: ", response)
      let authToken = response.data.auth_token
      localStorage.setItem('JWT', `${authToken}`)
      console.log("AuthToken: ", authToken)
      dispatch(authSuccess(user, authToken))
    })
    .catch(errors => {
      console.log("Auth Failed: ", errors)
      dispatch(authFailure(errors))
      localStorage.clear()
    })
}

export const logoutUser = (dispatch) => {
  localStorage.removeItem('JWT')
  dispatch(logout())
}

export const getUser = () => {

}