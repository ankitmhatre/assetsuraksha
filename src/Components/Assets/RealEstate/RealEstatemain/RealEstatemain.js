import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import FormButton from '../../../UI/Button/FormButton';

class RealEstatemain extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <h2>Real Estate</h2>
                <Divider />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <NavLink to="/user_profile/real_estate_form">
                    <FormButton onClick={this.props.DisplayaRealEstateForm} value="Add Real Estate" />  
                </NavLink>  
            </div>
        )
    }
}

export default RealEstatemain;


