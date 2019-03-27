import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";

import TextBox from "../../UI/TextBox/TextBox";
import './PDetails.css';
import Label from "../../UI/Label/Label";
import * as actionTypes from '../../../store/actions'
import UserProfile from "../../../Containers/UserProfile/UserProfile";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      backgroundColor: "#fd4b4b",
      width: '150px'
    },
  });

class PDetails extends Component {
    state = {
        firstName: '',
        lastName: '',
        line1: '',
        line2: '',
        line3: '',
        city: '',
        state: '',
        country: '',
        otpbox: false
    }

    FirstNameHandler = (event) => {
        
        this.setState({firstName: event.target.value})
        // console.log(event.target.value);
        
    }

    LastNameHandler = (event) => {
        this.setState({lastName: event.target.value})
        // console.log(event.target.value);
    }

    Line1Handler = (event) => {
        this.setState({line1: event.target.value})
        // console.log(event.target.value);
    }

    Line2Handler = (event) => {
        this.setState({line2: event.target.value})
        // console.log(event.target.value);
    }

    Line3Handler = (event) => {
        this.setState({line3: event.target.value})
        // console.log(event.target.value);
    }

    CityHandler = (event) => {
        this.setState({city: event.target.value})
        // console.log(event.target.value);
    }

    StateHandler = (event) => {
        this.setState({state: event.target.value})
    }

    countryHandler = (event) => {
        this.setState({country: event.target.value})
    }

    VerifyHandler = () => {
        this.setState({otpbox: true})
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <h1 className="PDHeading">Personal Details</h1>
                <Divider />
                <div className="PDmarginTop">
                    <Label value="Name :" /><br/>
                    <TextBox
                        type="text" placeholder="First Name" 
                        onChange={this.FirstNameHandler}/>
                    <TextBox 
                        type="text" placeholder="Last Name" 
                        onChange={this.LastNameHandler} />
                </div>
                <div className="PDmarginTop">
                    <Label value="Address :" /><br/>
                    <TextBox 
                        type="text" placeholder="Line 1"
                        onChange={this.Line1Handler} />
                    <TextBox 
                        type="text" placeholder="Line 2" 
                        onChange={this.Line2Handler} /><br/>
                    <TextBox
                        type="text" placeholder="Line 3"
                        onChange={this.Line3Handler} />
                    <TextBox 
                        type="text" placeholder="City"
                        onChange={this.CityHandler} />
                </div>
                <div className="PDmarginTop">
                    <Label value="Region/Country :" /><br/>
                    <TextBox 
                        type="text" placeholder="State"
                        onChange={this.StateHandler} />
                    <TextBox 
                        type="text" placeholder="Country"
                        onChange={this.CountryHandler} />
                </div>
                <div className="PDmarginTop">
                    <Label value="Contact Number :" /><br/>
                    <TextBox 
                        type="text" placeholder="Phone Number"
                        onChange={this.props.phoneNumberHandler} />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.button}
                        onClick={this.VerifyHandler}>
                        Verify
                    </Button>
                    
                </div>
                {this.state.otpbox && (
                    <div>
                        <p className="OTPtag">An OTP will be sent to your mobile number.</p>
                        <div className="PDmarginTop">
                            <Label value="OTP :" /> <br/>
                            <TextBox 
                                type="text" placeholder="Enter OTP"
                                onChange={this.props.inputOTPHandler} />
                            <Button variant="contained" color="primary" className={classes.button}>
                                Submit OTP
                            </Button>
                        </div>
                    </div>
                )}
                <div className="continueTop">
                    <Button 
                        component={Link}
                        to = "/user_profile"
                        variant="contained" 
                        color="primary" 
                        className={classes.button}>
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

// const mapStateToProps = state => ({
//     otpbox: state.otpbox
// });

const mapDispatchToProps = dispatch => ({
    inputOTPHandler: (event) => dispatch({type: actionTypes.OTP, val: event.target.value}),
    phoneNumberHandler: (event) => dispatch({type: actionTypes.PHONE_NUMBER, val: event.target.value}),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(PDetails));