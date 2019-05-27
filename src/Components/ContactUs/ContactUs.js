import React, { Component } from 'react';
import Label from '../UI/Label/Label';
import './ContactUs.css';
import { Divider } from '@material-ui/core';
import FormButton from '../UI/Button/FormButton';
import axios from 'axios'

class ContactUs extends Component {

    state = {
        userName: "",
        email: "",
        message: "",
    } 

    TextInputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    SubmitHandler = () => {

        const ContactUsData = {
            userName: this.state.userName,
            email: this.state.email,
            message: this.state.message,
        }

        axios.post('--API Link--', ContactUsData )
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
        
        alert('Thank you, we will respond as soon as possible.')
    }

    render() {
        return (
            <div className="ContactUsBox">
                <h1>Contact Us</h1>
                <Divider />
                <p style={{fontSize: '20px'}}>Got a question? We would love to hear from you. 
                    Send us a message and we will respond as soon as possible.</p>
                <Label value="Name" />
                <input 
                    className="Name"
                    type="text"
                    name="userName"
                    onChange={this.TextInputHandler} />

                <Label value="Email" />
                <input 
                    className="Name"
                    type="email"
                    name="email"
                    onChange={this.TextInputHandler} />

                <Label value="Message" />
                <textarea
                    className="Message"
                    name="message"
                    onChange={this.TextInputHandler}>
                </textarea>
                <br />
                
                <FormButton 
                    value="Submit"
                    onClick={this.SubmitHandler} />
            </div>
        )
    }
}

export default ContactUs;