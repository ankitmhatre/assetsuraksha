import React from 'react';
import './LoginContainer.css'
import Login from '../Login/Login';
import assetTracking from '../../assets/asset_tracking.png'

const LoginContainer = () => {
    return (
        <div className="landingGraphicHolder">
            <img src = {assetTracking} />
            {/* <Login /> */}
        </div>
    )
}

export default LoginContainer;