import React, { Suspense, lazy, useContext, useReducer } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import UserContext from './context/user-context'
import { authReducer } from './reducers/auth'

const CardSearchPage = lazy(() => import('./components/pages/CardSearchPage'))
const Home = lazy(() => import('./components/pages/Home'))
const About = lazy(() => import('./components/pages/About'))
const NotFound = lazy(() => import('./components/pages/NotFound'))
const Login = lazy(() => import('./components/auth/Login'))
const Register = lazy(() => import('./components/auth/Register'))



function App() {

  const initialState = useContext(UserContext)
  const [{ name, email, JWT, loggedIn }, dispatch] = useReducer(authReducer, initialState)

  return (
    <UserContext.Provider value={{name, email, JWT, loggedIn}} >
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
