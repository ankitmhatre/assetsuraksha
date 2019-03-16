import React, { Component } from 'react';
import './SideDrawer.css';
import NavItems from '../NavBar/NavItems/NavItems';
import Backdrop from '../UI/Backdrop/Backdrop';

const SideDrawer = (props) => (
    <div>
        <Backdrop show={props.showBackdrop} clicked={props.sideDrawerCloseHandler}/>
        <div className={props.showBackdrop?"SideDrawer open":"SideDrawer close"}>
            <NavItems />
        </div>
    </div>   
)

export default SideDrawer;