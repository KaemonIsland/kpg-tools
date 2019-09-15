import axios from 'axios'
import { authRequest, authSuccess, authFailure, logout } from '../../reducers/auth';

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
    dispatch(authSuccess(user, authToken))
  } catch (error) {
    dispatch(authFailure(error))
      localStorage.clear()
  }
}

export const logoutUser = (dispatch) => {
  localStorage.removeItem('JWT')
  dispatch(logout())
}

export const getUser = () => {

}