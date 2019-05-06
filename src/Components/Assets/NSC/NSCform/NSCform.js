import React, { Component } from 'react';
import Label from '../../../UI/Label/Label';
import './NSCform.css'
import Dropdown from '../../../UI/Dropdown/Dropdown';
import TextBox from '../../../UI/TextBox/TextBox';
import { Divider } from '@material-ui/core';
import NomineeDetails from '../../Common/NomineeDetails/NomineeDetails';
import HolderDetails from '../../Common/HolderDetails/HolderDetails';
import SubLabel from '../../../UI/Label/SubLabel/SubLabel';
import FormButton from '../../../UI/Button/FormButton';

class NSCform extends Component {
    state = {
        self_agent: "select one",
        agentName: "",
        agentCode: "",
        NSCissue: "select one",
        noOfCertificates: "",
        sr_no: "",
        certificateFormat: "select one",
        certificateNumber: "",
        postOffice: "",
        location: "",
        faceValue: "select one",
        maturityPeriod: "",
        maturityAmount: "",

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
        
        nominationPlace: "select one",
        nomineeFname: "",
        nomineeMname: "",
        nomineeLname: "",
        nomineeCity: "",
        nomineeState: "",
        nomineePincode: "",
        nomineePAN: "",
        relationship: "select one",
        nomineeContact: "",

        list: {
            self_agent: ["Self", "Agent"],
            issueDroplist: [
                "VII Issue, Upto 30-Nov-2011",
                "VII Issue, 1-Dec-2011 to 31-Mar-2012",
                "VII Issue, 1-Apr-2012 to 31-Mar-2013",
                "VII Issue, 1-Apr-2013 to 31-Mar-2016",
                "VII Issue, 1-Apr-2016 to 30-Sep-2016",
                "VII Issue, 1-Oct-2016 Onwards",
                "IX Issue, 1-Dec-2011 to 31-Mar-2012",
                "IX Issue, 1-Apr-2012 to 31-Mar-2013",
                "IX Issue, 1-Apr-2013 to 19-Dec-2015"
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

    }

    render() {
        return(
            <div>
                <h2 className="Heading">NSC Holding Details</h2>

                <Divider />

                <Label value="NSC Issue:"/>
                <Dropdown 
                    droplist={this.state.list.issueDroplist}
                    ItemSelect={this.DropdownHandler}
                    name="NSCissue"
                    select={this.state.NSCissue} />

                <Label value="Applied through:"/>
                <Dropdown
                    droplist={this.state.list.self_agent}
                    ItemSelect={this.InputHandler}
                    name="self_agent"
                    select={this.state.self_agent} />
                    
                {
                    this.state.self_agent === "Agent" ? (
                        <div>
                            <Label value="Agent Details:"/>
                            <TextBox
                                placeholder="Agent Name" 
                                onChange={this.TextInputHandler}
                                name="agentName"
                                value={this.state.agentName} 
                                 />
                            <TextBox 
                                placeholder="Agent Code" 
                                onChange={this.TextInputHandler}
                                name="agentCode"
                                value={this.state.agentCode} 
                                />
                        </div>
                    ): null
                }
                
                <h2 className="Heading">NSC Certificate Details</h2>
                
                <Divider />
                
                <Label value="Total number of NSC certificates you hold:"/>
                <TextBox
                    placeholder="Total NSC certificates" 
                    onChange={this.TextInputHandler} 
                    name="noOfCertificates"
                    value={this.state.noOfCertificates} 
                    />
                
                <p>(Please fill up the certificate details below)</p>
                
                <Label value="Sr. Number:" />
                <TextBox
                    placeholder="Sr. Number" 
                    onChange={this.TextInputHandler} 
                    name="sr_no"
                    value={this.state.sr_no} 
                    />
                <SubLabel subValue="(out of total number of certificates you hold)" />
                
                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Certificate format" />
                        <Dropdown
                            droplist={this.state.list.certificate_format}
                            name="certificateFormat"
                            ItemSelect={this.InputHandler}
                            select={this.state.certificateFormat} />
                    </div>

                    <div>
                    <Label 
                        value="Certificate Number:" />
                    <TextBox
                        placeholder="Sr. Number" 
                        onChange={this.TextInputHandler}
                        name="certificateNumber"
                        value={this.state.certificateNumber}

                        />
                    <SubLabel
                        subValue="(as printed on the certificate)" />
                    </div>
                </div>
                
                <div className="Holder">
                    <div className="HolderDiv">
                    <Label value="Issuing Post Office:" />
                    <TextBox
                        placeholder="Post Office" 
                        onChange={this.TextInputHandler} 
                        name="postOffice"
                        value={this.state.postOffice} 
                        />
                    </div>

                    <div>
                    <Label value="Location:" />
                    <TextBox
                        placeholder="Location" 
                        onChange={this.TextInputHandler} 
                        name="location"
                        value={this.state.location} 
                        />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                    <Label value="Face Value(Rs.):" />
                    <Dropdown 
                        droplist={this.state.list.faceValueList}
                        name="faceValue"
                        ItemSelect={this.InputHandler}
                        select={this.state.faceValue} />
                    </div>

                    <div>
                    <Label value="Maturity Period(Years):" />
                    <TextBox
                        placeholder="Maturity Period" 
                        onChange={this.TextInputHandler} 
                        name="maturityPeriod"
                        value={this.state.maturityPeriod} 
                        />
                    </div>
                </div>

                <Label value="Maturity Amount:" />
                <TextBox
                    placeholder="Maturity Amount" 
                    onChange={this.TextInputHandler} 
                    name="maturityAmount"
                    value={this.state.maturityAmount} 
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

                <NomineeDetails
                    nominationPlace={this.state.nominationPlace}
                    nomineeFname={this.state.nomineeFname}
                    nomineeMname={this.state.nomineeMname}
                    nomineeLname={this.state.nomineeLname}
                    nomineeCity={this.state.nomineeCity}
                    nomineeState={this.state.nomineeState}
                    nomineePincode={this.state.nomineePincode}
                    nomineePAN={this.state.nomineePAN}
                    relationship={this.state.relationship}
                    nomineeContact={this.state.nomineeContact}
                    relationshipList={this.state.list.relationshipList}
                    minor={this.state.list.minor}
                    TextInputHandler={this.TextInputHandler}
                    DropdownHandler={this.DropdownHandler}
                />
            
            <div style={{margin: "40px 10px"}}>
                <FormButton 
                value="Submit NSC"
                onClick={this.SubmitHandler} />
            </div>

            </div>
        )
    }
}

export default NSCform;