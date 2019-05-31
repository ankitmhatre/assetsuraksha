import React, {Component} from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

class Login extends Component {

    state = {
        email: "",
        password: "",
        loggedIn: false,
    }

    InputHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    LoginHandler = (e) => {
        e.preventDefault()

        if(this.state.email === 'sid@123.com' && this.state.password === '123') {
            localStorage.setItem("token", "asdfghjkl")
            this.setState({loggedIn: true})
        }

        const loginData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3001/user/login', loginData )
        .then(response => {
            console.log("Response ============" + response.data)
            localStorage.setItem("token", response.data.token)
            this.setState({loggedIn: true})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {

        if(this.state.loggedIn) {
            return <Redirect to="/user_profile" />
        }

        return (
            <div className="loginbox shadow-4">
                <h1>Login</h1>
                <form>

                    <p>Email</p>
                    <input 
                        type="email" name="email" placeholder="Enter Email"
                        onChange={this.InputHandler} />

                    <p>Password</p>
                    <input 
                        type="password" name="password" placeholder="Enter Password"
                        onChange={this.InputHandler}  />

                    <input 
                        type="submit" value="Login"
                        onClick={this.LoginHandler}  />

                    <NavLink to="forgot_password">Forgot password?</NavLink> <br/>

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