import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './SignUp.css'
import axios from 'axios'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        wrongPassword: false
    }
    
    InputChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }   

    SignUpHandler = () => {
        if (this.state.password === this.state.confirmPassword) {

            const signUpData = {
                email: this.state.email,
                password: this.state.password,
            }
    
            axios.post('http://localhost:3001/user/signup', signUpData )
                .then(response => {
                    console.log(response)
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
        return (
            <div className="SignUpbox shadow-3">
                <h1>Sign Up</h1>
                <form>
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
                    
                    {
                        this.state.wrongPassword && <p className="WrongPassword">Passwords don't match</p>
                    }
                        
                    <NavLink to="/personal_details">
                        <input 
                            type="submit" name="" value="Sign Up"
                            onClick={this.SignUpHandler} />
                    </NavLink>
                </form>
            </div>
        )
    }
}

export default SignUp;