import React, {Component} from 'react';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className="loginbox">
                <h1>Login</h1>
                <form>
                    <p>Email</p>
                    <input type="email" name="" placeholder="Enter Email" />
                    <p>Password</p>
                    <input type="password" name="" placeholder="Enter Password" />
                    <input type="submit" name="" value="Login" />
                    <a href="#">Forgot password?</a> <br/>
                    <label>
                        Don't have an account? 
                        <a href="#"> Create one</a>
                    </label>
                </form>
            </div>
        )
    }
}

export default Login;