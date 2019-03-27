import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Login.css';
import * as actionTypes from '../../../store/actions';

class Login extends Component {
    render() {
        return (
            <div className="loginbox shadow-4">
                <h1>Login</h1>
                <form>
                    <p>Email</p>
                    <input 
                        type="email" name="" placeholder="Enter email"
                        onChange={this.props.emailHandler} />
                    <p>Password</p>
                    <input 
                        type="password" name="" placeholder="Enter password"
                        onChange={this.props.passwordHandler}  />
                    <input 
                        type="submit" name="" value="Login"
                        onClick={this.props.loginHandler}  />
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

const mapDispatchToProps = dispatch => ({
    emailHandler: (event) => dispatch({type: actionTypes.LOGIN_EMAIL, val: event.target.value}),
    passwordHandler: (event) => dispatch({type: actionTypes.LOGIN_PASSWORD, val: event.target.value}),
    loginHandler: () => dispatch({type: actionTypes.LOGIN}),
});

export default connect(null, mapDispatchToProps)(Login);