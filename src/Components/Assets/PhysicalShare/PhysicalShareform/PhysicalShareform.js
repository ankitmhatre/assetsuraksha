import React, { Component } from 'react';
import Label from '../../../UI/Label/Label';
import './PhysicalShareform.css'
import Dropdown from '../../../UI/Dropdown/Dropdown';
import TextBox from '../../../UI/TextBox/TextBox';
import { Divider } from '@material-ui/core';
import HolderDetails from '../../Common/HolderDetails/HolderDetails';
import SubLabel from '../../../UI/Label/SubLabel/SubLabel';
import FormButton from '../../../UI/Button/FormButton';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const token = localStorage.getItem("token")

class PhysicalShareform extends Component {
    state = {
        noOfCertificates: "",
        certificateNumber: "",
        companyName: "",

        holdingMode: "select one",
        soleFname: "",
        soleMname: "",
        soleLname: "",
        minorSole: "select one",
        jointFname: "",
        jointMname: "",
        jointLname: "",
        minorJoint: "select one",
        jointPAN: "",
        thirdHolderFname: "",
        thirdHolderMname: "",
        thirdHolderLname: "",
        minorThirdHolder: "select one",
        thirdHolderPAN: "",

        securityType: "select one",
        inFigures: "",
        inWords: "",
        faceValue: "",
        ISIN: "",
        securityStatus: "Select one",
        folioNumber: "",
        certiNoFrom: "",
        certiNoTo: "",
        DistinctiveNoFrom: "",
        DistinctiveNoTo: "",
        quantity: "",
        sr_no: "",
        lockedInReason: "",
        lockedInReleaseDate: "",

        list: {
            security_status: ["Free", "Locked-In"],
            security_type: [
                "Equity",
                "Others" 
            ],
            certificate_format: [
                "Physical certificate", 
                "Electronic mode", 
                "Passbook mode"
            ],
            faceValueList: [
                100, 500, 1000, 5000, 10000
            ],
            modeOfHolding: [
                "Single", "Joint"
            ],
            minor: ["yes", "no"],
            relationshipList: [
                "Mother",
                "Father", 
                "Brother", 
                "Sister", 
                "Son", 
                "Daughter",
                "Mother-in-law", 
                "Father-in-law",
                "Brother-in-law", 
                "Sister-in-law",
                "Grandson",
                "Grand-daughter",
                "Other"
            ]
        }
        
    }
    
    TextInputHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    DropdownHandler = (name, item) => {
        this.setState({ [name]: item });
    }   

    SubmitHandler = () => {

        let newDate = new Date();

        let date = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`

        let time = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`

        const PSdata = {
            noOfCertificates: this.state.noOfCertificates,
            certificateNumber: this.state.certificateNumber,
            companyName: this.state.companyName,
    
            holdingMode: this.state.holdingMode,
            soleFname: this.state.soleFname,
            soleMname: this.state.soleMname,
            soleLname: this.state.soleLname,
            minorSole: this.state.minorSole,
            jointFname: this.state.jointFname,
            jointMname: this.state.jointMname,
            jointLname: this.state.jointLname,
            minorJoint: this.state.minorJoint,
            jointPAN: this.state.jointPAN,
            thirdHolderFname: this.state.thirdHolderFname,
            thirdHolderMname: this.state.thirdHolderMname,
            thirdHolderLname: this.state.thirdHolderLname,
            minorThirdHolder: this.state.minorThirdHolder,
            thirdHolderPAN: this.state.thirdHolderPAN,
    
            securityType: this.state.securityType,
            inFigures: this.state.inFigures,
            inWords: this.state.inWords,
            faceValue: this.state.faceValue,
            ISIN: this.state.ISIN,
            securityStatus: this.state.securityStatus,
            folioNumber: this.state.folioNumber,
            certiNoFrom: this.state.certiNoFrom,
            certiNoTo: this.state.certiNoTo,
            distinctiveNoFrom: this.state.distinctiveNoFrom,
            distinctiveNoTo: this.state.distinctiveNoTo,
            quantity: this.state.quantity,
            sr_no: this.state.sr_no,
            lockedInReason: this.state.lockedInReason,
            lockedInReleaseDate: this.state.lockedInReleaseDate,

            date: date,
            time: time,
        }

        axios.post('Api Link',
            { 
                headers: {
                    "Authorization" : `Bearer ${token}`
                },
            }, PSdata)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        return(
            <div>
                <h2 className="Heading">Physical Share Holding Details</h2>

                <Divider />

                <Label value="Total number of physical share certificates you hold:"/>
                <TextBox
                    placeholder="Total certificates" 
                    name="noOfCertificates"
                    onChange={this.TextInputHandler} 
                    value={this.state.noOfCertificates} 
                />

                <Label value="Certificate Number:"/>
                <TextBox
                    placeholder="Enter Number" 
                    name="certificateNumber"
                    onChange={this.TextInputHandler} 
                    value={this.state.certificateNumber} 
                />

                <Label value="Company Name:"/>
                <TextBox
                    placeholder="Enter Name" 
                    name="companyName"
                    onChange={this.TextInputHandler} 
                    value={this.state.companyName} 
                />

                <HolderDetails
                    holdingMode={this.state.holdingMode}
                    soleFname={this.state.soleFname}
                    soleMname={this.state.soleMname}
                    soleLname={this.state.soleLname}
                    minorSole={this.state.minorSole}
                    jointFname={this.state.jointFname}
                    jointMname={this.state.jointMname}
                    jointLname={this.state.jointLname}
                    minorJoint={this.state.minorJoint}
                    jointPAN={this.state.jointPAN}
                    thirdHolderFname={this.state.thirdHolderFname}
                    thirdHolderMname={this.state.thirdHolderMname}
                    thirdHolderLname={this.state.thirdHolderLname}
                    minorThirdHolder={this.state.minorThirdHolder}
                    thirdHolderPAN={this.state.thirdHolderPAN}
                    modeOfHolding={this.state.list.modeOfHolding}
                    minor={this.state.list.minor}
                    TextInputHandler={this.TextInputHandler}
                    DropdownHandler={this.DropdownHandler}
                />

                <h2 className="Heading">Security Details</h2>

                <Divider />

                <Label value="Type Of Security:"/>
                <Dropdown 
                    droplist={this.state.list.security_type}
                    name="securityType"
                    ItemSelect={this.DropdownHandler}
                    select={this.state.securityType} />

                <Label value="Quantity to be Dematerialized:"/>
                <TextBox
                    placeholder="In Figures" 
                    name="inFigures"
                    onChange={this.TextInputHandler}
                    value={this.state.inFigures} 
                />
                <TextBox 
                    placeholder="In Words" 
                    name="inWords"
                    onChange={this.TextInputHandler} 
                    value={this.state.inWords} 
                />

                <Label value="Face Value" />
                <TextBox
                    placeholder="Enter Value" 
                    name="faceValue"
                    onChange={this.TextInputHandler}
                    value={this.state.faceValue}
                />

                <Label value="ISIN:" />
                <TextBox
                    placeholder="Enter ISIN" 
                    name="ISIN"
                    onChange={this.TextInputHandler}
                    value={this.state.ISIN}
                />
                <SubLabel subValue="(to be filled by DP)" />

                <Label value="Current Status of Securities:"/>
                <Dropdown
                    droplist={this.state.list.security_status}
                    name="securityStatus"
                    ItemSelect={this.DropdownHandler}
                    select={this.state.securityStatus} />

                <h2 className="Heading">Folio Details</h2>
                
                <Divider />

                <Label value="Folio Number:"/>
                <TextBox
                    placeholder="Enter Number" 
                    name="folioNumber"
                    onChange={this.TextInputHandler}
                    value={this.state.folioNumber} 
                />

                <Label value="Certificate Number:"/>
                <TextBox
                    placeholder="From" 
                    name="certiNoFrom"
                    onChange={this.TextInputHandler}
                    value={this.state.certiNoFrom} 
                />
                <TextBox 
                    placeholder="To" 
                    name="certiNoTo"
                    onChange={this.TextInputHandler} 
                    value={this.state.certiNoTo} 
                />

                <Label value="Distinctive Numbers:"/>
                <TextBox
                    placeholder="From" 
                    name="DistinctiveNoFrom"
                    onChange={this.TextInputHandler}
                    value={this.state.DistinctiveNoFrom} 
                />
                <TextBox 
                    placeholder="To" 
                    name="DistinctiveNoTo"
                    onChange={this.TextInputHandler} 
                    value={this.state.DistinctiveNoTo} 
                />

                <Label value="Quantity:" />
                <TextBox
                    placeholder="Enter Value" 
                    name="quantity"
                    onChange={this.TextInputHandler}
                    value={this.state.quantity}
                />

                <Label value="Total Number Of Certificates:" />
                <TextBox
                    placeholder="Sr. Number" 
                    name="sr_no"
                    onChange={this.TextInputHandler}
                    value={this.state.sr_no}
                />

                <h2 className="Heading">Locked-in Security Details</h2>
                
                <Divider />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Locked-In Reason:" />
                        <TextBox
                            placeholder="Enter Reason" 
                            name="lockedInReason"
                            onChange={this.TextInputHandler}
                            value={this.state.lockedInReason}
                        />
                    </div>

                    <div>
                        <Label value="Locked-In Release Date:" />
                        <TextBox
                            placeholder="Enter Date" 
                            name="lockedInReleaseDate"
                            onChange={this.TextInputHandler}
                            value={this.state.lockedInReleaseDate}
                        />
                    </div>
                </div>

                <div style={{margin: "40px 10px"}}>
                    <NavLink to="/user_profile/physical_share" >
                        <FormButton 
                            value="Submit"
                            onClick={this.SubmitHandler} />
                    </NavLink>
                </div>

            </div>
        )
    }
}

export default PhysicalShareform;