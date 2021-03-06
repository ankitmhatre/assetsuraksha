import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import FormButton from '../../../UI/Button/FormButton';
import AssetExpansionPanel from '../../../UI/ExpansionPanel/AssetExpansionPanel'
import axios from 'axios';

class KVPmain extends Component {
    state = {
        assetBars: [],
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
                <h2>Kisan Vikas Patra(KVP)</h2>
                <Divider />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <NavLink to="/user_profile/KVP_form">
                    <FormButton onClick={this.props.DisplayKVPForm} value="Add KVP" />
                </NavLink>

                <h2 style={{marginTop: "50px"}}>Your KVPs</h2>
                <Divider />
                { 
                    this.state.assetBars.length > 0 
                    ? assetBars 
                    : <p>Your KVPs will be displayed here.</p> 
                } 
            </div>
        )
    }
}

export default KVPmain;


