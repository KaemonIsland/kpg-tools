import React, { Suspense, lazy, useContext, useReducer } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import UserContext from './context/user-context'
import { authReducer } from './reducers/auth'
import { setUser } from './components/util/authActions'

const CardSearchPage = lazy(() => import('./components/pages/CardSearchPage'))
const Home = lazy(() => import('./components/pages/Home'))
const About = lazy(() => import('./components/pages/About'))
const NotFound = lazy(() => import('./components/pages/NotFound'))
const Login = lazy(() => import('./components/auth/Login'))
const Register = lazy(() => import('./components/auth/Register'))


function App() {
  const initialState = useContext(UserContext)
  const [{ user, JWT, loggedIn }, dispatch] = useReducer(authReducer, initialState)

  if (!loggedIn && localStorage.getItem('JWT')) {
    setUser(dispatch, localStorage.getItem('JWT'))
  }

  return (
    <UserContext.Provider value={{user, JWT, loggedIn}} >
        <NavBar dispatch={dispatch} loggedIn={loggedIn} />
        <Suspense fallback={<h1>Loading...</h1>} >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/cardsearch' exact render={() => <CardSearchPage jwt={JWT} />} />
            <Route path='/login' exact render={() => (
              loggedIn
                ? <Redirect to="/" />
                : <Login dispatch={dispatch} />
            )} />
            <Route path='/register' exact render={() => (
              loggedIn
              ? <Redirect to="/" />
              : <Register dispatch={dispatch} />
            )} />
            <Route path='/about' exact component={About} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        <Footer />
    </UserContext.Provider>
  );
}

export default App;
