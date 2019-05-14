import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './SignUp.css'
import axios from 'axios'

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    UsernameHandler = (event) => {
        this.setState({username: event.target.value})
        //using axios to check whether the username is taken or not 
        //http://localhost:3000/checkUserExists?username=shiii
        var bodyFormData ={}
        bodyFormData["username"] = event.target.value

        axios({
            method :'POST',
            headers: {"Access-Control-Allow-Origin": true},
            url : 'http://localhost:3000/checkUserExists',
            data: bodyFormData,
        })
        .then(res => console.log(res.data));
    }
    
    EmailHandler = (event) => {
        this.setState({email: event.target.value})
    }
    
    PasswordHandler = (event) => {
        this.setState({password: event.target.value})
    }    

    SignUpHandler = () => {

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

    render() {
        return (
            <div className="SignUpbox shadow-3">
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