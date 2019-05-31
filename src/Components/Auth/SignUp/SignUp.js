import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import './SignUp.css'
import axios from 'axios'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        signUp: false,
        wrongPassword: false
    }
    
    InputChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }   

    SignUpHandler = (e) => {
        e.preventDefault()
        
        if(this.state.email === 'sid@123.com' && this.state.password === '123') {
            localStorage.setItem("token", "asdfghjkl")
            this.setState({signUp: true})
        }

        // const token = localStorage.setItem("token", "asdfghjkl")
        // if(token === 'asdfghjk') {
        //     this.setState({signUp: true})
        // }

        const signUpData = {
            email: this.state.email,
            password: this.state.password,
        }
    
        if (this.state.password === this.state.confirmPassword) {

            axios.post('http://localhost:3001/user/signup', signUpData )
                .then(response => {
                    console.log(response.data)
                    localStorage.setItem("token", response.data.token)
                    this.setState({signUp: true})
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else {
            this.setState({wrongPassword: true})
        }
    }
        

    render() {
        
        if(this.state.signUp) {
            return <Redirect to="/personal_details" />
        }

        return (
            <div className="SignUpbox shadow-3">
                <h1>Sign Up</h1>
                <form>
                    {
                        this.state.wrongPassword && 
                        <div className="WrongPassword">
                            <p>Passwords don't match</p>
                        </div>
                    }

                    <p>Email</p>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter email"
                        onChange={this.InputChangeHandler} />

                    <p>Password</p>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter password"
                        onChange={this.InputChangeHandler} />

                    <p>Confirm Password</p>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Enter password"
                        onChange={this.InputChangeHandler} />
                    
                    
                        
                    <input 
                        type="submit" name="" value="Sign Up"
                        onClick={this.SignUpHandler} />

                </form>
            </div>
        )
    }
}

export default SignUp;