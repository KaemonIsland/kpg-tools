import React, { Suspense, lazy, useContext, useReducer, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
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
  console.log("Hey Kaemon What's Up!")

  const initialState = useContext(UserContext)
  const [{ user, JWT, loggedIn }, dispatch] = useReducer(authReducer, initialState)

  if (!loggedIn && localStorage.getItem('JWT')) {
    setUser(dispatch, localStorage.getItem('JWT'))
  }
  console.log('user', user, 'JWT', JWT, 'LoggedIn', loggedIn)

  return (
    <UserContext.Provider value={{user, JWT, loggedIn}} >
      <div className="App">
        <NavBar dispatch={dispatch} loggedIn={loggedIn} />
        <Suspense fallback={<h1>Loading...</h1>} >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/cardsearch' exact component={CardSearchPage} />
            <Route path='/login' exact render={routeProps => <Login dispatch={dispatch} />} />
            <Route path='/register' exact render={routerProps => <Register dispatch={dispatch} />} />
            <Route path='/about' exact component={About} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
