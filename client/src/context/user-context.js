import { createContext } from 'react'

const UserContext = createContext({
    name: 'Guest',
    email: 'example@email.com',
    JWT: '',
    loggedIn: false
});

export default UserContext