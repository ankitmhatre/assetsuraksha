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
            name="nominationPlace"
            ItemSelect={props.DropdownHandler}
            select={props.nominationPlace} />

        <h2>Nominee details:</h2>
        <Label value="Name:" />
        <TextBox
            placeholder="First Name" 
            name="nomineeFname"
            onChange={props.TextInputHandler} 
            value={props.nomineeFname} 
            />
        <TextBox
            placeholder="Middle Name" 
            name="nomineeMname"
            onChange={props.NomineeMnameHandler} 
            value={props.nomineeMname} 
            />
        <TextBox
            placeholder="Last Name" 
            name="nomineeLname"
            onChange={props.TextInputHandler} 
            value={props.nomineeLname} 
            />

        <Label value="Address:" />
        <TextBox
            placeholder="City" 
            name="nomineeCity"
            onChange={props.TextInputHandler} 
            value={props.nomineeCity}
             />
        <TextBox
            placeholder="State" 
            name="nomineeState"
            onChange={props.NomineeStateHandler} 
            value={props.nomineeState} 
            />
        <TextBox
            placeholder="Pincode" 
            name="nomineePincode"
            onChange={props.TextInputHandler} 
            value={props.nomineePincode}
             />

        <Label value="PAN Number:" />
        <TextBox
            placeholder="PAN Number" 
            name="nomineePAN"
            onChange={props.TextInputHandler} 
            value={props.nomineePAN}
             />   

        <Label value="Relationship with certificate holder:" />
        <Dropdown 
            droplist={props.relationshipList}
            name="relationship"
            ItemSelect={props.DropdownHandler}
            select={props.relationship} /> 

        <Label value="Contact Number:" />
        <TextBox
            placeholder="Contact Number" 
            name="nomineeContact"
            onChange={props.TextInputHandler} 
            value={props.nomineeContact}
             /> 

    </div>
)

export default NomineeDetails;