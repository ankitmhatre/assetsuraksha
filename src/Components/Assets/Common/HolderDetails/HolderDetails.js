import React from 'react';
import Dropdown from '../../../UI/Dropdown/Dropdown';
import TextBox from '../../../UI/TextBox/TextBox';
import Label from '../../../UI/Label/Label';
import { Divider } from '@material-ui/core';

const HolderDetails = (props) => (
    <div>
        
        <h2 style={{fontSize: "40px"}}>Holder Details</h2>
        <Divider />

        <Label value="Mode of holding:" />
        <Dropdown 
            droplist={props.modeOfHolding}
            name="holdingMode"
            ItemSelect={props.DropdownHandler}
            select={props.holdingMode} />

        <Label value="Sole/1st applicant name(as per PAN):" />
        <TextBox
            placeholder="First Name" 
            name="soleFname"
            onChange={props.TextInputHandler} 
            value={props.soleFname}
             />
        <TextBox
            placeholder="Middle Name" 
            name="soleMname"
            onChange={props.TextInputHandler} 
            value={props.soleMname}
             />
        <TextBox
            placeholder="Last Name" 
            name="soleLname"
            onChange={props.TextInputHandler} 
            value={props.soleLname}
             />

        <Label value="Minor:" />
        <Dropdown 
            droplist={props.minor}
            name="minorSole"
            ItemSelect={props.DropdownHandler}
            select={props.minorSole} />

        {
            props.holdingMode === "Joint" ? (
            <div>
                <Label value="Joint/2nd holder name(as per PAN):" />
        <TextBox
            placeholder="First Name" 
            name="jointFname"
            onChange={props.TextInputHandler} 
            value={props.jointFname} 
            />
        <TextBox
            placeholder="Middle Name" 
            name="jointMname"
            onChange={props.JointMnameHandler} 
            value={props.jointMname} 
            />
        <TextBox
            placeholder="Last Name" 
            name="jointLname"
            onChange={props.TextInputHandler} 
            value={props.jointLname} 
            />
        
        <Label value="Minor:" />
        <Dropdown 
            droplist={props.minor}
            name="minorJoint"
            ItemSelect={props.DropdownHandler}
            select={props.minorJoint} />

        <Label value="Joint holder PAN number:" />
        <TextBox
            placeholder="PAN Number" 
            name="jointPAN"
            onChange={props.TextInputHandler} 
            value={props.jointPAN}
             />

        <Label value="3rd holder name(as per PAN):" />
        <TextBox
            placeholder="First Name" 
            name="thirdHolderFname"
            onChange={props.TextInputHandler} 
            value={props.thirdHolderFname} 
            />
        <TextBox 
            placeholder="Middle Name" 
            name="thirdHolderMname"
            onChange={props.TextInputHandler} 
            value={props.thirdHolderMname} 
            />
        <TextBox
            placeholder="Last Name" 
            name="thirdHolderLname"
            onChange={props.TextInputHandler} 
            value={props.thirdHolderLname} 
            />

        <Label value="Minor:" />
        <Dropdown 
            droplist={props.minor}
            name="minorThirdHolder"
            ItemSelect={props.DropdownHandler}
            select={props.minorThirdHolder} />

        <Label value="3rd holder PAN number:" />
        <TextBox
            placeholder="PAN Number" 
            name="thirdHolderPAN"
            onChange={props.TextInputHandler} 
            value={props.thirdHolderPAN}
             />
            </div>)
            : null
        }
    </div>
)

export default HolderDetails;