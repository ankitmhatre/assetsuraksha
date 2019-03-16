import React from "react";
import "./Navbar.css";
import NavItems from "../NavItems/NavItems";
import MenuIcon from '@material-ui/icons/Menu';
import DrawerToggle from "../DrawerToggle/DrawerToggle";

const Navbar = (props) => {
    return (
        <header className="Toolbar">
            <div className="MenuIcon">
                <DrawerToggle clicked={props.DrawerToggleHandler}/>
            </div>
            <div className="logo">LOGO</div>
            <nav>
                <NavItems />
            </nav>
        </header>
    )
}

export default Navbar;