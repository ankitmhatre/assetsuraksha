import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import FormButton from '../../UI/Button/FormButton';

class RealEstate extends Component {
    state = {
       
    }

    render() {
        return (
            <div>
                <h2>Real Estate</h2>
                <Divider />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <FormButton value="Add Real Estate" />
            </div>
        )
    }
}

export default RealEstate;


