import React, {Component} from 'react';
import './SignUp.css'

class SignUp extends Component {
    render() {
        return (
            <div className="SignUpbox">
                <h1>Sign Up</h1>
                <form>
                    <p>Username</p>
                    <input type="text" name="" placeholder="Enter username" />
                    <p>Email</p>
                    <input type="email" name="" placeholder="Enter email" />
                    <p>Password</p>
                    <input type="password" name="" placeholder="Enter password" />
                    <input type="submit" name="" value="Sign Up" />
                </form>
            </div>
        )
    }
}

export default SignUp;