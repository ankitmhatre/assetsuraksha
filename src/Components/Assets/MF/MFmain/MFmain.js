import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import FormButton from '../../../UI/Button/FormButton';

class MFmain extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <h2>Mutual Funds</h2>
                <Divider />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <FormButton onClick={this.props.DisplayaMFForm} value="Add MF" />
            </div>
        )
    }
}

export default MFmain;


