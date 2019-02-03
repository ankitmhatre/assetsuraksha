import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextBox from "../../UI/TextBox/TextBox";
import './PDetails.css';
import Label from "../../UI/Label/Label";

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
                    <Label value="Name :" /><br/>
                    <TextBox
                        type="text" placeholder="First Name" />
                    <TextBox 
                        type="text" placeholder="Last Name"  />
                </div>
                <div className="PDmarginTop">
                    <Label value="Address :" /><br/>
                    <TextBox 
                        type="text" placeholder="Line 1" />
                    <TextBox 
                        type="text" placeholder="Line 2" /><br/>
                    <TextBox
                        type="text" placeholder="Line 3" />
                    <TextBox 
                        type="text" placeholder="City" />
                </div>
                <div className="PDmarginTop">
                    <Label value="Region/Country :" /><br/>
                    <TextBox 
                        type="text" placeholder="State" />
                    <TextBox 
                        type="text" placeholder="Country" />
                </div>
                <div className="PDmarginTop">
                    <Label value="Contact Number :" /><br/>
                    <TextBox 
                        type="text" placeholder="Phone Number" />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.button}
                        onClick={this.SendOTPHandler}>
                        Send OTP
                    </Button>
                    
                </div>
                {this.state.otpbox && (
                    <div>
                        <p className="OTPtag">An OTP will be sent to your mobile number.</p>
                        <div className="PDmarginTop">
                            <Label value="OTP :" /> <br/>
                            <TextBox 
                                type="text" placeholder="Enter OTP"  />
                            <Button variant="contained" color="primary" className={classes.button}>
                                Verify
                            </Button>
                        </div>
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