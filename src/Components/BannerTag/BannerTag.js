import React from 'react';
import './BannerTag.css';
import { NavLink } from 'react-router-dom';
const BannerTag = () => {
    return (
        <div className="TagBox">
            <p className="HeadTag">Manage Assets Digitally</p>
            <p className="SubTag">Asset management has never been so easy!</p>
            <NavLink to="/signup">
                <input type="submit" name="" value="GET STARTED" className="GetStarted" />
            </NavLink>
        </div>
    )
}

export default BannerTag;