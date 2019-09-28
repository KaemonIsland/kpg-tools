import axios from 'axios'
import { authRequest, authSuccess, authFailure, logout } from '../../reducers/auth';

const parseJwt = jwtToken => {
  let base64 = jwtToken
    .split('.')[1]
    .replace(/-/g, '+')
    .replace(/_/g, '/')
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

export const registerUser = async (dispatch, user) => {
  try {
    await axios.post('/api/v1/users', { user: {...user}})
    authenticate(dispatch, user)
  } catch (error) {
    console.log("Errors Registering: ", error)
  }
}

export const authenticate = async (dispatch, user) => {
  dispatch(authRequest())

  try {
    const { data } = await axios.post('/authenticate', user)
    const authToken = data.auth_token

    localStorage.setItem('JWT', `${authToken}`)
    dispatch(authSuccess(parseJwt(authToken), authToken))
  } catch (error) {
    dispatch(authFailure(error))
      localStorage.clear()
  }
}

export const logoutUser = (dispatch) => {
  localStorage.removeItem('JWT')
  dispatch(logout())
}

export const getUser = async (dispatch, jwtToken) => {
  const user = parseJwt(jwtToken)
  try {
    const updatedUser = await axios.get(`/api/v1/users/${user.user_id}`, {
      headers: { 'Authorization': `Bearer ${jwtToken}`}
    })

    dispatch(authSuccess(updatedUser, jwtToken))

  } catch (error) {
    dispatch(authFailure(error))
  }
}

export const setUser = (dispatch, jwtToken) => {
  const user = parseJwt(jwtToken)
  dispatch(authSuccess(user, jwtToken))
}