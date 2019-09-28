const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST'
const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS'
const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE'
const LOGOUT = 'LOGOUT'

export const authRequest = () => ({ type: AUTHENTICATION_REQUEST })

//If auth is correct, will receive users and JWT token
export const authSuccess = (user, token) => ({ type: AUTHENTICATION_SUCCESS, user, token })

//If auth is incorrect, will receive errors
export const authFailure = errors => ({ type: AUTHENTICATION_FAILURE, errors })

export const logout = () => ({ type: LOGOUT })

const initialState = {
    id: undefined,
    name: 'Guest',
    email: 'example@email.com',
    JWT: '',
    loggedIn: true
}

export const authReducer = (state = initialState, { type, user, token}) => {
    switch(type) {
        case AUTHENTICATION_REQUEST:
            return { ...state}
        case AUTHENTICATION_SUCCESS:
            return { user: {...user}, JWT: token, loggedIn: true }
        case AUTHENTICATION_FAILURE:
            return {}
        case LOGOUT:
            return { ...initialState, loggedIn: false }
        default:
            return state
    }
}