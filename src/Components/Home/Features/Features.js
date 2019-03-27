import React from 'react';
import './Features.css'

const Features = () => (
    <div className = "FeaturesBG">
        <div className="Space">
            <label className="Featuretext">Features</label>
        </div>

        <div className="Features">
            <div className="FeatureBox">
                <h3>Single Access Point</h3>
                <p>
                    Online single digital asset repository for all types of asset
                    details that can be accessed from anywhere, anytime!!
                </p>
            </div>
            <div className="FeatureBox">
                <h3>User Assistance</h3>
                <p>
                    Asset specific on-ground assistance services from our professional team.
                </p>
            </div>
            <div className="FeatureBox">
                <h3>User Convinience</h3>
                <p>
                    Recieve asset specific important alerts and notifications from time to time.
                </p>        
            </div>
            <div className="FeatureBox">
                <h3>Redemption Compliance</h3>
                <p>
                    Asset specific redemption compliance
                    assessment which helps you to fulfill the gaps to avoid any delay at
                    the time of redemption.
                </p>
            </div>
            
        </div>        
    </div>
)

export default Features;