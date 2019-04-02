import React, { Component } from 'react';
import Label from '../../../UI/Label/Label';
import './NSCform.css'
import Dropdown from '../../../UI/Dropdown/Dropdown';
import TextBox from '../../../UI/TextBox/TextBox';
import { Divider } from '@material-ui/core';
import NomineeDetails from '../../Common/NomineeDetails/NomineeDetails';
import HolderDetails from '../../Common/HolderDetails/HolderDetails';
import SubLabel from '../../../UI/Label/SubLabel/SubLabel';

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

    // certificate details input handlers
    IssueDroplistHandler = item => this.setState({ NSCissue: item});

    Self_AgentHandler = item => this.setState({ self_agent: item });

    AgentNameHandler = event => this.setState({ agentName: event.target.value });

    AgentCodeHandler = event => this.setState({ agentCode: event.target.value });

    NoOfCertificates = event => this.setState({ noOfCertificates: event.target.value });

    SrNoHandler = event => this.setState({ sr_no: event.target.value });

    CertificateFormatHandler = item => this.setState({ certificateFormat: item });

    CertificateNumberHandler = event => this.setState({ certificateNumber: event.target.value });

    IssuingPostOfficeHandler = event => this.setState({ postOffice: event.target.value });

    LocationHandler = event => this.setState({ location: event.target.value });
    
    FaceValueHandler = item => this.setState({ faceValue: item });

    MaturityPeriodHandler = event => this.setState({ maturityPeriod: event.target.value });

    MaturityAmountHandler = event => this.setState({ maturityAmount: event.target.value });


    // Holder input Handlers
    ModeOfHoldingHandler = item => this.setState({ holdingMode: item});

    SoleFnameHandler = event => this.setState({ soleFname: event.target.value });

    SoleMnameHandler = event => this.setState({ soleMname: event.target.value });

    SoleLnameHandler = event => this.setState({ soleLname: event.target.value });

    MinorSoleHandler = item => this.setState({ minorSole: item });

    JointFnameHandler = event => this.setState({ jointFname: event.target.value });

    JointMnameHandler = event => this.setState({ jointMname: event.target.value });

    JointLnameHandler = event => this.setState({ jointLname: event.target.value });

    MinorJointHandler = item => this.setState({ minorJoint: item });

    JointPANHandler = event => this.setState({ jointPAN: event.target.value });
    
    ThirdHolderFnameHandler = event => this.setState({ thirdHolderFname: event.target.value });

    ThirdHolderMnameHandler = event => this.setState({ thirdHolderMname: event.target.value });

    ThirdHolderLnameHandler = event => this.setState({ thirdHolderLname: event.target.value });

    MinorThirdHolderHandler = item => this.setState({ minorThirdHolder: item });

    ThirdHolderPANHandler = event => this.setState({ thirdHolderPAN: event.target.value });



    // Nominee input handlers 
    NominationPlaceHandler = item => this.setState({ nominationPlace: item });

    NomineeFnameHandler = event => this.setState({ nomineeFname: event.target.value });
    
    NomineeMnameHandler = event => this.setState({ nomineeMname: event.target.value });

    NomineeLnameHandler = event => this.setState({ nomineeLname: event.target.value });

    NomineeCityHandler = event => this.setState({ nomineeCity: event.target.value });

    NomineeStateHandler = event => this.setState({ nomineeState: event.target.value });

    NomineePincodeHandler = event => this.setState({ nomineePincode: event.target.value });

    NomineePANHandler = event => this.setState({ nomineePAN: event.target.value });

    RelationshipHandler = item => this.setState({ relationship: item });
    
    NomineeContactHandler = event => this.setState({ nomineeContact: event.target.value });

    render() {
        return(
            <div>
                <h2 className="Heading">NSC Holding Details</h2>

                <Divider />

                <Label value="NSC Issue:"/>
                <Dropdown 
                    droplist={this.state.list.issueDroplist}
                    ItemSelect={this.IssueDroplistHandler}
                    select={this.state.NSCissue} />

                <Label value="Applied through:"/>
                <Dropdown
                    droplist={this.state.list.self_agent}
                    ItemSelect={this.Self_AgentHandler}
                    select={this.state.self_agent} />
                    
                {
                    this.state.self_agent === "Agent" ? (
                        <div>
                            <Label value="Agent Details:"/>
                            <TextBox
                                placeholder="Agent Name" 
                                onChange={this.AgentNameHandler}
                                value={this.state.agentName} 
                                 />
                            <TextBox 
                                placeholder="Agent Code" 
                                onChange={this.AgentCodeHandler} 
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
                    onChange={this.NoOfCertificates} 
                    value={this.state.noOfCertificates} 
                    />
                
                <p>(Please fill up the certificate details below)</p>
                
                <Label value="Sr. Number:" />
                <TextBox
                    placeholder="Sr. Number" 
                    onChange={this.SrNoHandler} 
                    value={this.state.sr_no} 
                    />
                <SubLabel subValue="(out of total number of certificates you hold)" />
                
                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Certificate format" />
                        <Dropdown
                            droplist={this.state.list.certificate_format}
                            ItemSelect={this.CertificateFormatHandler}
                            select={this.state.certificateFormat} />
                    </div>

                    <div>
                    <Label 
                        value="Certificate Number:" />
                    <TextBox
                        placeholder="Sr. Number" 
                        onChange={this.CertificateNumberHandler} 
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
                        onChange={this.IssuingPostOfficeHandler} 
                        value={this.state.postOffice} 
                        />
                    </div>

                    <div>
                    <Label value="Location:" />
                    <TextBox
                        placeholder="Location" 
                        onChange={this.LocationHandler} 
                        value={this.state.location} 
                        />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                    <Label value="Face Value(Rs.):" />
                    <Dropdown 
                        droplist={this.state.list.faceValueList}
                        ItemSelect={this.FaceValueHandler}
                        select={this.state.faceValue} />
                    </div>

                    <div>
                    <Label value="Maturity Period(Years):" />
                    <TextBox
                        placeholder="Maturity Period" 
                        onChange={this.MaturityPeriodHandler} 
                        value={this.state.maturityPeriod} 
                        />
                    </div>
                </div>

                <Label value="Maturity Amount:" />
                <TextBox
                    placeholder="Maturity Amount" 
                    onChange={this.MaturityAmountHandler} 
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
                    ModeOfHoldingHandler={this.ModeOfHoldingHandler}
                    SoleFnameHandler={this.SoleFnameHandler}
                    SoleMnameHandler={this.SoleMnameHandler}
                    SoleLnameHandler={this.SoleLnameHandler}
                    MinorSoleHandler={this.MinorSoleHandler}
                    JointFnameHandler={this.JointFnameHandler}
                    JointMnameHandler={this.JointMnameHandler}
                    JointLnameHandler={this.JointLnameHandler}
                    MinorJointHandler={this.MinorJointHandler}
                    JointPANHandler={this.JointPANHandler}
                    ThirdHolderFnameHandler={this.ThirdHolderFnameHandler}
                    ThirdHolderMnameHandler={this.ThirdHolderMnameHandler}
                    ThirdHolderLnameHandler={this.ThirdHolderLnameHandler}
                    MinorThirdHolderHandler={this.MinorThirdHolderHandler}
                    ThirdHolderPANHandler={this.ThirdHolderPANHandler}
                    modeOfHolding={this.state.list.modeOfHolding}
                    minor={this.state.list.minor}
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
                    NominationPlaceHandler={this.NominationPlaceHandler}
                    NomineeFnameHandler={this.NomineeFnameHandler}
                    NomineeMnameHandler={this.NomineeMnameHandler}
                    NomineeLnameHandler={this.NomineeLnameHandler}
                    NomineeCityHandler={this.NomineeCityHandler}
                    NomineeStateHandler={this.NomineeStateHandler}
                    NomineePincodeHandler={this.NomineePincodeHandler}
                    NomineePANHandler={this.NomineePANHandler}
                    RelationshipHandler={this.RelationshipHandler}
                    NomineeContactHandler={this.NomineeContactHandler}
                    relationshipList={this.state.list.relationshipList}
                    minor={this.state.list.minor}
                />

            </div>
        )
    }
}

export default NSCform;