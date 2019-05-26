import React, { Component } from 'react';
import './ResetPassword.css';
import axios from 'axios';

class ResetPassword extends Component {

    state = {
        password: "",
        confirmPassword: "",
    }

    InputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    PasswordSubmitHandler = () => {
        const password = {
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        }

        axios.post('--API LINK--', password )
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="ResetPasswordBox shadow-4">
                <form>
                    <h2>Reset Password</h2>
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter Password"
                        onChange={this.InputChangeHandler} />

                    <input 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirm Password"
                        onChange={this.InputChangeHandler} />
                    
                    <input 
                        type="submit" name="" value="Reset Password"
                        onClick={this.PasswordSubmitHandler} />
                </form>
            </div>
        )
    }
} 

export default ResetPassword;