import React, { Component } from 'react';
import { Divider, ExpansionPanel, ExpansionPanelActions } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import NSCcalculator from '../Calculator/NSCcalculator';
import FormButton from '../../../UI/Button/FormButton';
import AssetExpansionPanel from '../../../UI/ExpansionPanel/AssetExpansionPanel'
import axios from 'axios';

class NSCmain extends Component {
    state = {
        displayCalculator: false,
        assetBars: [],
        certificateNumber: "",
        faceValue: "",
        maturityPeriod: "",
        maturityAmount: ""
    }

    CalculatorHandler = () => {
        this.setState({displayCalculator: !this.state.displayCalculator})
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState( {assetBars: response.data} )
                console.log(response)
            })
    }

    render() {

        const assetBars = this.state.assetBars.map( assetBar => {
            return  (
                <AssetExpansionPanel 
                    key={assetBar.id}
                    CertificateNumber={assetBar.address.zipcode}
                    FaceValue={assetBar.address.geo.lat}
                    MaturityPeriod=""
                    MaturityAmount={assetBar.address.geo.lng} />
            )
        })
 
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
                <h2 style={{marginTop: "50px"}}>Your NSCs</h2>
                <Divider />
                { 
                    this.state.assetBars.length > 0 
                    ? assetBars 
                    : <p>Your NSCs will be displayed here.</p> 
                } 
            </div>
            
        )
    }
}

export default NSCmain;


