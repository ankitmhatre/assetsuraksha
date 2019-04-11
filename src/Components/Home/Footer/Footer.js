import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.css'

const Footer = () => (
    <div className="Footer">
        <h1>LOGO</h1>
        <NavLink to="">
            <label>Home</label>
        </NavLink>
        <label>|</label>
        <NavLink to="">
            <label>About Us</label>
        </NavLink>
        <label>|</label>
        <NavLink to="">
            <label>Contact!</label>
        </NavLink>
        <p>Assetsuraksha. All Rights Reserved.</p>
    </div>
)

export default Footer;