import React from 'react';
import Dropdown from '../../../UI/Dropdown/Dropdown';
import TextBox from '../../../UI/TextBox/TextBox';
import Label from '../../../UI/Label/Label';
import { Divider } from '@material-ui/core';

const NomineeDetails = (props) => (
    <div>
        <h2 style={{fontSize: "40px"}}>Nominee Details</h2>
        <Divider />
        
        <Label value="Is nomination in place:" />
        <Dropdown 
            droplist={props.minor}
            ItemSelect={props.NominationPlaceHandler}
            select={props.nominationPlace} />

        <h2>1st Nominee details</h2>
        <Label value="Name:" />
        <TextBox
            type="text" 
            placeholder="First Name" 
            onChange={props.NomineeFnameHandler} 
            value={props.nomineeFname} 
            />
        <TextBox
            type="text" 
            placeholder="Middle Name" 
            onChange={props.NomineeMnameHandler} 
            value={props.nomineeMname} 
            />
        <TextBox
            type="text" 
            placeholder="Last Name" 
            onChange={props.NomineeLnameHandler} 
            value={props.nomineeLname} 
            />

        <Label value="Address:" />
        <TextBox
            type="text" 
            placeholder="City" 
            onChange={props.NomineeCityHandler} 
            value={props.nomineeCity}
             />
        <TextBox
            type="text" 
            placeholder="State" 
            onChange={props.NomineeStateHandler} 
            value={props.nomineeState} 
            />
        <TextBox
            type="text" 
            placeholder="Pincode" 
            onChange={props.NomineePincodeHandler} 
            value={props.nomineePincode}
             />

        <Label value="PAN Number:" />
        <TextBox
            type="text" 
            placeholder="PAN Number" 
            onChange={props.NomineePANHandler} 
            value={props.nomineePAN}
             />   

        <Label value="Relationship with certificate holder:" />
        <Dropdown 
            droplist={props.relationshipList}
            ItemSelect={props.RelationshipHandler}
            select={props.relationship} /> 

        <Label value="Contact Number:" />
        <TextBox
            type="text" 
            placeholder="Contact Number" 
            onChange={props.NomineeContactHandler} 
            value={props.nomineeContact}
             /> 

    </div>
)

export default NomineeDetails;