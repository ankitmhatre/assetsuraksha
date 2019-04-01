import React from 'react';
import './Features.css'
import SinglePoint from '../../../assets/singlePoint.svg';
import UserAssistance from '../../../assets/userAssistance.svg';
import UserConvinience from '../../../assets/userConvinience.svg';
import ComplianceRedemption from '../../../assets/compliance.svg';

const Features = () => (
    <div className = "FeaturesBG">
        <div className="Space">
            <h2 className="Featuretext">Features</h2>
        </div>

        <div className="Features">
            <div className="grow" >
                <img src={SinglePoint} />
                <h3>Single Access Point</h3>
                <p>
                    Online single digital asset repository for all types of asset
                    details that can be accessed from anywhere, anytime!!
                </p>
            </div>
            <div className="grow" >
            <img src={UserAssistance} />
                <h3>User Assistance</h3>
                
                <p>
                    Asset specific on-ground assistance services from our professional team.
                </p>
            </div>
            <div className="grow" >
            <img src={UserConvinience} />
                <h3>User Convinience</h3>
                <p>
                    Recieve asset specific important alerts and notifications from time to time.
                </p>        
            </div>
            <div className="grow" >
            <img src={ComplianceRedemption} />
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