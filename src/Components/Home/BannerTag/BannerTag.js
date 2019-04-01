import React from 'react';
import './BannerTag.css';
import { NavLink } from 'react-router-dom';

const BannerTag = () => {
    return (
        <div className="BackImage">
            <div className="TagBox">
                <p className="HeadTag animated bounce delay-2s">ASSET SURAKSHA</p>
                <p className="SubTag animated bounceInLeft delay-2s">Register Your Assets | Protect Your Wealth | Hassel Free Redemption</p>
                <NavLink to="/signup">
                    <input type="submit" name="" value="GET STARTED" 
                        className="GetStarted animated zoomIn delay-2s" />
                </NavLink>
            </div>
        </div>
        
    )
}

export default BannerTag;