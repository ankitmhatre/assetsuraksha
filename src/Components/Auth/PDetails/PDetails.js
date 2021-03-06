import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextBox from "../../UI/TextBox/TextBox";
import './PDetails.css';
import Label from "../../UI/Label/Label";
import { Link, Redirect } from "react-router-dom";
import { Divider } from "@material-ui/core";
import axios from 'axios';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      backgroundColor: "#fd4b4b",
      width: '150px'
    },
  });

const token = localStorage.getItem("token")

class PDetails extends Component {

    state = {
        firstName: '',
        lastName: '',
        line1: '',
        line2: '',
        line3: '',
        city: '',
        state: '',
        countryCode: '+91',
        country: '',
        gender: '',
        phoneNumber: '',
        otp: '',
        otpbox: false,
        signedUp: false,
        verified: false,
    }

    TextInputHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    VerifyHandler = () => {

        this.setState({otpbox: true})
        
        const phoneNumber = this.state.countryCode +this.state.phoneNumber
        
        axios.post('Api Link', 
            { 
                headers: {
                    "Authorization" : `Bearer ${token}`
                } ,
            }, phoneNumber )
        .then(response => {
            console.log(response);
            this.setState({otpbox: true})
        })
        .catch(err => {
            console.log(err);
        })
    }

    SubmitOTPHandler = () => {

        this.setState({verified: true})

        const otp = this.state.otp

        axios.post('Api Link', 
            { 
                headers: {
                    "Authorization" : `Bearer ${token}`
                } ,
            }, otp )
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    }

    ContinueHandler = () => {

        const token = localStorage.getItem("token")
        if(token === 'asdfghjkl') {
            this.setState({signedUp: true})
        }

        console.log(this.state.countryCode +this.state.phoneNumber);

        const PDetailsData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            line1: this.state.line1,
            line2: this.state.line2,
            line3: this.state.line3,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            gender: this.state.gender,
            phoneNumber: this.state.countryCode +this.state.phoneNumber,
            otp: this.state.otp,
        }

        axios.post('http://localhost:3001/user/signup', 
            { 
                headers: {
                    "Authorization" : `Bearer ${token}`
                } ,
            }, PDetailsData )
            .then(response => {
                console.log(response)
                this.setState({signedUp: true})
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {

        const { classes } = this.props;

        if(this.state.signedUp) {
            return <Redirect to="/user_profile" />
        }

        const verifyOTP = this.state.verified ? 
        (<Button 
            variant="contained" 
            color="primary" 
            onClick={this.ContinueHandler}
            className={classes.button}>
                Continue
        </Button>) : 
        (<Button 
            variant="contained" 
            color="primary" 
            disabled
            className={classes.button}>
                Continue
        </Button>)
        
        return(
            <div>
                <h1 className="PDHeading">Personal Details</h1>

                <Divider />

                <div className="PDmarginTop">
                    <Label value="Name :" /><br/>
                    <TextBox 
                        placeholder="First Name" 
                        name="firstName"
                        onChange={this.TextInputHandler}/>
                    <TextBox 
                        placeholder="Last Name" 
                        name="lastName"
                        onChange={this.TextInputHandler} />
                </div>

                <div className="PDmarginTop">
                    <Label value="Address :" /><br/>
                    <TextBox 
                        placeholder="Line 1"
                        name="line1"
                        onChange={this.TextInputHandler} />
                    <TextBox 
                        placeholder="Line 2" 
                        name="line2"
                        onChange={this.TextInputHandler} /><br/>
                    <TextBox
                        placeholder="Line 3"
                        name="line3"
                        onChange={this.TextInputHandler} />
                    <TextBox 
                        placeholder="City"
                        name="city"
                        onChange={this.TextInputHandler} />
                </div>

                <div className="PDmarginTop">
                    <Label value="Region/Country :" /><br/>
                    <TextBox 
                        placeholder="State"
                        name="state"
                        onChange={this.TextInputHandler} />
                    <TextBox 
                        placeholder="Country"
                        name="country"
                        onChange={this.TextInputHandler} />
                </div>

                <div className="PDmarginTop">
                    <Label value="Gender :" /><br/>
                    <input className="Radio" 
                        type="radio" name="gender" value="male"
                        onChange={this.TextInputHandler} /> Male
                    <input className="Radio" 
                        type="radio" name="gender" value="female"
                        onChange={this.TextInputHandler} /> Female
                    <input className="Radio" 
                        type="radio" name="gender" value="other"
                        onChange={this.TextInputHandler} /> Other
                </div>                

                <div className="PDmarginTop">
                    <Label value="Contact Number :" /><br/>
                    <input 
                    className="CountryCode"
                    name="countryCode"
                    value={this.state.countryCode}
                    onChange={this.TextInputHandler} />

                    <TextBox 
                        placeholder="Phone Number"
                        name="phoneNumber"
                        onChange={this.TextInputHandler} />
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
                                placeholder="Enter OTP"
                                name="otp"
                                onChange={this.props.TextInputHandler} />
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={this.SubmitOTPHandler}
                                className={classes.button}>
                                    Submit OTP
                            </Button>
                        </div>
                    </div>
                )}

                <div className="continueTop">
                    {verifyOTP}
                </div>  
            </div>
        )
    }
}

PDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PDetails);