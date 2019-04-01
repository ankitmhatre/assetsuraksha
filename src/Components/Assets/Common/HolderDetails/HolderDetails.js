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
            ItemSelect={props.ModeOfHoldingHandler}
            select={props.holdingMode} />

        <Label value="Sole/1st applicant name(as per PAN):" />
        <TextBox
            type="text" 
            placeholder="First Name" 
            onChange={props.SoleFnameHandler} 
            value={props.soleFname}
             />
        <TextBox
            type="text" 
            placeholder="Middle Name" 
            onChange={props.SoleMnameHandler} 
            value={props.soleMname}
             />
        <TextBox
            type="text" 
            placeholder="Last Name" 
            onChange={props.SoleLnameHandler} 
            value={props.soleLname}
             />

        <Label value="Minor:" />
        <Dropdown 
            droplist={props.minor}
            ItemSelect={props.MinorSoleHandler}
            select={props.minorSole} />

        {
            props.holdingMode === "Joint" ? (
            <div>
                <Label value="Joint/2nd holder name(as per PAN):" />
        <TextBox
            type="text" 
            placeholder="First Name" 
            onChange={props.JointFnameHandler} 
            value={props.jointFname} 
            />
        <TextBox
            type="text" 
            placeholder="Middle Name" 
            onChange={props.JointMnameHandler} 
            value={props.jointMname} 
            />
        <TextBox
            type="text" 
            placeholder="Last Name" 
            onChange={props.JointLnameHandler} 
            value={props.jointLname} 
            />
        
        <Label value="Minor:" />
        <Dropdown 
            droplist={props.minor}
            ItemSelect={props.MinorJointHandler}
            select={props.minorJoint} />

        <Label value="Joint holder PAN number:" />
        <TextBox
            type="text" 
            placeholder="PAN Number" 
            onChange={props.JointPANHandler} 
            value={props.jointPAN}
             />

        <Label value="3rd holder name(as per PAN):" />
        <TextBox
            type="text" 
            placeholder="First Name" 
            onChange={props.ThirdHolderFnameHandler} 
            value={props.thirdHolderFname} 
            />
        <TextBox
            type="text" 
            placeholder="Middle Name" 
            onChange={props.ThirdHolderMnameHandler} 
            value={props.thirdHolderMname} 
            />
        <TextBox
            type="text" 
            placeholder="Last Name" 
            onChange={props.ThirdHolderLnameHandler} 
            value={props.thirdHolderLname} 
            />

        <Label value="Minor:" />
        <Dropdown 
            droplist={props.minor}
            ItemSelect={props.MinorThirdHolderHandler}
            select={props.minorThirdHolder} />

        <Label value="3rd holder PAN number:" />
        <TextBox
            type="text" 
            placeholder="PAN Number" 
            onChange={props.ThirdHolderPANHandler} 
            value={props.thirdHolderPAN}
             />
            </div>)
            : null
        }
    </div>
)

export default HolderDetails;