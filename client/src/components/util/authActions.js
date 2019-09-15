import axios from 'axios'
import { authRequest, authSuccess, authFailure, logout } from '../../reducers/auth';

export const registerUser = (dispatch, user) => {
  axios.post('/api/v1/users', { user: {...user}})
    .then(response => {
      authenticate(dispatch, response.data)
    })
    .catch(errors => console.log(errors))
}

export const authenticate = (dispatch, user) => {
  dispatch(authRequest())
  axios.post('/authenticate', user)
    .then(response => {
      let authToken = response.data.auth_token
      localStorage.setItem('JWT', `${authToken}`)
      dispatch(authSuccess(user, authToken))
    })
    .catch(errors => {
      dispatch(authFailure(errors))
    })
}

export const logoutUser = (dispatch) => {
  localStorage.removeItem('JWT')
  dispatch(logout())
}

export const getUser = () => {

}