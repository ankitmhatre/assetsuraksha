import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import 'materialize-css'

const NavBar = () => {
    return (
        <nav className="transparent z-depth-0 Spacing">
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo logo">Logo</a>
                <div>
                    <ul className="right hide-on-med-and-down">
                    <li><NavLink to="#" >Home</NavLink></li>
                    <li><NavLink to="#" >About</NavLink></li>
                    <li><NavLink to="/login" >Login</NavLink></li>
                    <li><NavLink to="/signup" className="btn orange darken-2" >Signup</NavLink></li>
                    {/* Dropdown Trigger */}
                    <li></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;