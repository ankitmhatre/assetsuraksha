import React, { Component } from 'react';
import { Divider } from '@material-ui/core';

class Home extends Component {

    state = {
        assetBars: ""
    }

    render() {
        return (
            <div>
                <h2 style={{fontSize: "40px"}}>Home</h2>
                <Divider />
                <p>
                    You are requested to enter details only for those assets where you are
                    registered as a single/ joint owner(s) or as the 1st applicant/ the 2nd
                    applicant / the 3rd applicant.
                </p>

                
                {/* <h2 style={{marginTop: "50px"}}>Your NSCs</h2>
                        <Divider />
                        { 
                            this.state.assetBars.length > 0 
                            ? assetBars 
                            : <p>Your NSCs will be displayed here.</p> 
                        }  */}
            </div>
        )
    }
}

export default Home;