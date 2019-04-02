import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import NSCcalculator from '../Calculator/NSCcalculator';
import FormButton from '../../../UI/Button/FormButton';

class NSCmain extends Component {
    state = {
        displayCalculator: false,
    }

    CalculatorHandler = () => {
        this.setState({displayCalculator: !this.state.displayCalculator})
    }

    render() {
        return (
            <div>
                <h2>National Savings Certificate(NSC)</h2>
                <Divider />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <NavLink to="/user_profile/NSC_form">
                    <FormButton onClick={this.props.DisplayNSCForm} value="Add NSC" />
                </NavLink>
                <p>You can calculate the NSC maturity amount using our NSC calculator.</p>
                <FormButton 
                    value="NSC Calculator"
                    onClick={this.CalculatorHandler} />
                {this.state.displayCalculator && <NSCcalculator /> }
            </div>
        )
    }
}

export default NSCmain;


