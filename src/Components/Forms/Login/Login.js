import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className="loginbox">
                <h1>Login</h1>
                <form>
                    <p>Email</p>
                    <input type="email" name="" placeholder="Enter email" />
                    <p>Password</p>
                    <input type="password" name="" placeholder="Enter password" />
                    <input type="submit" name="" value="Login" />
                    <NavLink to="#">Forgot password?</NavLink> <br/>
                    <label>
                        Don't have an account? 
                        <NavLink to="/signup"> Create one</NavLink>
                    </label>
                </form>
            </div>
        )
    }
}

export default Login;