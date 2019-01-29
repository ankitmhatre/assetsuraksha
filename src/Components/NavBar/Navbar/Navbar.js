import React from "react";
import "./Navbar.css";
import NavItems from "../NavItems/NavItems";

const Navbar = () => (
        <header className="Toolbar">
        <div className="logo">LOGO</div>
        <nav>
            <NavItems />
        </nav>
        </header>
)

export default Navbar;