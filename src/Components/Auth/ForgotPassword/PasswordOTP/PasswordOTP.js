import React, { Component } from 'react';
import './PasswordOTP.css';
import axios from 'axios';

class PasswordOTP extends Component {

    state = {
        otp: ""
    }

    InputChangeHandler = (event) => {
        this.setState({otp: event.target.value})
    }

    OTPSubmitHandler = () => {
        const otp = {
            otp: this.state.otp,
        }

        axios.post('--API LINK--', otp )
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="OTPBox shadow-4">
                <form>
                    <h2>Enter OTP</h2>

                    <label>OTP</label>
                    <input 
                        type="text" 
                        name="otp"
                        className="Otp"
                        placeholder="Enter OTP"
                        onChange={this.InputChangeHandler} />
                    
                    <input 
                        type="submit" name="" value="Submit OTP"
                        onClick={this.OTPSubmitHandler} />
                </form>
            </div>
        )
    }
} 

export default PasswordOTP;