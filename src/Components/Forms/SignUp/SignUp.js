import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './SignUp.css'

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    UsernameHandler = (event) => {
        this.setState({username: event.target.value})
    }
    
    EmailHandler = (event) => {
        this.setState({email: event.target.value})
    }
    
    PasswordHandler = (event) => {
        this.setState({password: event.target.value})
    }    

    SignUpHandler = () => {

    }

    render() {
        return (
            <div className="SignUpbox">
                <h1>Sign Up</h1>
                <form>
                    <p>Username</p>
                    <input 
                        type="text" name="" placeholder="Enter username"
                        onChange={this.UsernameHandler} />
                    <p>Email</p>
                    <input 
                        type="email" name="" placeholder="Enter email"
                        onChange={this.EmailHandler} />
                    <p>Password</p>
                    <input 
                        type="password" name="" placeholder="Enter password"
                        onChange={this.PasswordHandler} />
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