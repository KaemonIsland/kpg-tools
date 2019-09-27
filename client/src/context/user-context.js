import { createContext } from 'react'

const UserContext = createContext({
    id: undefined,
    name: 'Guest',
    email: 'example@email.com',
    JWT: '',
    loggedIn: false
});

export default UserContext