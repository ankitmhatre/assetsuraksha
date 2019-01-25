import React from 'react';
import './NavBar.css';
import 'materialize-css'

const NavBar = () => {
    return (
        <nav className="transparent z-depth-0 Spacing">
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo logo">Logo</a>
                <div>
                    <ul className="right hide-on-med-and-down">
                    <li><a href="" >Home</a></li>
                    <li><a href="" >About</a></li>
                    <li><a href="login.html" >Login</a></li>
                    <li><a href="signup.html" className="btn orange darken-2" >Signup</a></li>
                    {/* Dropdown Trigger */}
                    <li></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;