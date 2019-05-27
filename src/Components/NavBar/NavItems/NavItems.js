import React from 'react';
import './NavItems.css'
import {NavLink} from 'react-router-dom';

const NavItems = (props) => (
    <ul className = "NavItems" >
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/">ABOUT US</NavLink></li>
        <li><NavLink to="/contact_us">CONTACT US</NavLink></li>
        <li><NavLink to="/login">LOGIN</NavLink></li>
        <li className="signup"><NavLink to="/signup">SIGN UP</NavLink></li>
    </ul>
)

export default NavItems;