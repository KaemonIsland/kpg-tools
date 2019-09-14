import React from 'react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../util/authActions'

const NavBar = ({ loggedIn, dispatch }) => {
    const buildAuthLinks = () => {
        if (!loggedIn) {
            return (
                <>
                    <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </>
            )
        } else {
            return (
                <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => logoutUser(dispatch)}>Logout</Link>
                </li>
            )
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Mana Flood</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {buildAuthLinks()}
                    <li className="nav-item">
                        <Link to="/cardsearch" className="nav-link">Card Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${loggedIn ? '' : 'disabled'}`} href="#" tabIndex="-1" aria-disabled="true">Deck</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${loggedIn ? '' : 'disabled'}`} href="#" tabIndex="-1" aria-disabled="true">Collection</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Info
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="about">About</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;