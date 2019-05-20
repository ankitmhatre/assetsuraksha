import React, { Component } from 'react';
import './EnterEmail.css';
import axios from 'axios';

class EnterEmail extends Component {

    state = {
        email: ""
    }

    InputChangeHandler = (event) => {
        this.setState({email: event.target.value})
    }

    EmailSubmitHandler = () => {
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
                    
                    <input 
                        type="submit" name="" value="Sign Up"
                        onClick={this.EmailSubmitHandler} />
                </form>
            </div>
        )
    }
} 

export default EnterEmail;