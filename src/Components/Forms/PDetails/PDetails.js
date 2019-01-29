import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './PDetails.css'

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      backgroundColor: "#fd4b4b",
      width: '150px'
    },
  });

class PDetails extends Component {
    state = {
        otpbox: false
    }

    SendOTPHandler = () => {
        this.setState({otpbox: true});
    }
    
    render() {
        const { classes } = this.props;
        return(
            <div className="PDContainer">
                <h1 className="PDHeading">Personal Details</h1>
                <div className="PDmarginTop">
                    <label className="PDlabel">Name :</label> <br/>
                    <input 
                        type="text" placeholder="First Name" className="PDinput" />
                    <input 
                        type="text" placeholder="Last Name" className="PDinput" />
                </div>
                <div className="PDmarginTop">
                    <label className="PDlabel">Address :</label><br/>
                    <input 
                        type="text" placeholder="Line 1" className="PDinput" />
                    <input 
                        type="text" placeholder="Line 2" className="PDinput" /><br/>
                    <input 
                        type="text" placeholder="Line 3" className="PDinput" />
                    <input 
                        type="text" placeholder="City" className="PDinput" />
                </div>
                <div className="PDmarginTop">
                    <label className="PDlabel">Region/Country :</label><br/>
                    <input 
                        type="text" placeholder="State" className="PDinput" />
                    <input 
                        type="text" placeholder="Country" className="PDinput" />
                </div>
                <div className="PDmarginTop">
                    <label className="PDlabel">Contact Number :</label><br/>
                    <input 
                        type="text" placeholder="Phone Number" className="PDinput" />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.button}
                        onClick={this.SendOTPHandler}>
                        Send OTP
                    </Button>
                    <p className="OTPtag">An OTP will be sent to your mobile number.</p>
                </div>
                {this.state.otpbox && (
                    <div className="PDmarginTop">
                        <label className="PDlabel">OTP :</label> <br/>
                        <input 
                            type="text" placeholder="Enter OTP" className="PDinput" />
                        <Button variant="contained" color="primary" className={classes.button}>
                            Verify
                        </Button>
                        
                    </div>
                )}
                <div className="continueTop">
                <Button variant="contained" color="primary" className={classes.button}>
                    Continue
                </Button>
                </div>  
            </div>
        )
    }
}
PDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(PDetails);
// export default PDetails;