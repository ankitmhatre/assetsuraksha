import React, { Component } from "react";
import { Route } from 'react-router-dom';
import SideDrawer from "../SideDrawer/SideDrawer";
import Navbar from "./Navbar/Navbar";

class Toolbar extends Component {
    state = {
        showBackdrop: false
    }

    DrawerToggleHandler = () => {
        this.setState({showBackdrop: !this.state.showBackdrop})
    }

    sideDrawerCloseHandler = () => {
        this.setState({showBackdrop: false})
    }

    render() {
        return (
            <div>
                <Navbar 
                    DrawerToggleHandler={this.DrawerToggleHandler} />
                <SideDrawer 
                    showBackdrop={this.state.showBackdrop}
                    sideDrawerCloseHandler={this.sideDrawerCloseHandler} />
            </div>
        )
    }
}

export default Toolbar;