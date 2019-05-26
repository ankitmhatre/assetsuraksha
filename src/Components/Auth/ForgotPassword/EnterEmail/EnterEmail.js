import React, { Component } from 'react';
import './EnterEmail.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class EnterEmail extends Component {

    state = {
        email: "",
    }

    InputChangeHandler = (event) => {
        this.setState({email: event.target.value})
    }

    EmailSubmitHandler = () => {
        alert("An OTP will be sent to your email")
        const email = {
            email: this.state.email,
        }

        axios.post('--API LINK--', email )
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="EmailBox shadow-4">
                <form>
                    <h2>Enter Email</h2>
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter Email"
                        onChange={this.InputChangeHandler} />

                    <NavLink to="/submit_otp">
                        <input 
                            type="submit" name="" value="Submit Email"
                            onClick={this.EmailSubmitHandler} />
                    </NavLink>
                    
                </form>
            </div>
        )
    }
} 

export default EnterEmail;