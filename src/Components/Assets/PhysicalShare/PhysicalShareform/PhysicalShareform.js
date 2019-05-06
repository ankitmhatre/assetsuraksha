import React, { Component } from 'react';
import Label from '../../../UI/Label/Label';
import './PhysicalShareform.css'
import Dropdown from '../../../UI/Dropdown/Dropdown';
import TextBox from '../../../UI/TextBox/TextBox';
import { Divider } from '@material-ui/core';
import NomineeDetails from '../../Common/NomineeDetails/NomineeDetails';
import HolderDetails from '../../Common/HolderDetails/HolderDetails';
import SubLabel from '../../../UI/Label/SubLabel/SubLabel';
import FormButton from '../../../UI/Button/FormButton';

class PhysicalShareform extends Component {
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
            self_agent: ["Free", "Locked-In"],
            issueDroplist: [
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

    // certificate details input handlers
    IssueDroplistHandler = item => this.setState({ NSCissue: item});

    Self_AgentHandler = item => this.setState({ self_agent: item });

    AgentNameHandler = event => this.setState({ agentName: event.target.value });

    AgentCodeHandler = event => this.setState({ agentCode: event.target.value });

    NoOfCertificates = event => this.setState({ noOfCertificates: event.target.value });

    SrNoHandler = event => this.setState({ sr_no: event.target.value });

    CertificateFormatHandler = item => this.setState({ certificateFormat: item });

    CertificateNumberHandler = event => {
        this.setState({ certificateNumber: event.target.value }) 
        // this.props.GetCertificateNumber(this.state.certificateNumber)
}

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

    
    SubmitNSC = () => {
        this.props.GetCertificateDetails(
            this.state.certificateNumber,
            this.state.faceValue,
            this.state.maturityPeriod,
            this.state.maturityAmount,
        )
    }


    render() {
        return(
            <div>
                {}
                <h2 className="Heading">Physical Share Holding Details</h2>

                <Divider />

                <Label value="Total number of physical share certificates you hold:"/>
                <TextBox
                    placeholder="Total NSC certificates" 
                    onChange={this.NoOfCertificates} 
                    value={this.state.noOfCertificates} 
                />

                <Label value="Certificate Number:"/>
                <TextBox
                    placeholder="Enter Number" 
                    onChange={this.NoOfCertificates} 
                    value={this.state.noOfCertificates} 
                />

                <Label value="Company Name:"/>
                <TextBox
                    placeholder="Enter Name" 
                    onChange={this.NoOfCertificates} 
                    value={this.state.noOfCertificates} 
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

                <h2 className="Heading">Security Details</h2>

                <Divider />

                <Label value="Type Of Security:"/>
                <Dropdown 
                    droplist={this.state.list.issueDroplist}
                    ItemSelect={this.IssueDroplistHandler}
                    select={this.state.NSCissue} />

                <Label value="Quantity to be Dematerialized:"/>
                <TextBox
                    placeholder="In Figures" 
                    onChange={this.AgentNameHandler}
                    value={this.state.agentName} 
                />
                <TextBox 
                    placeholder="In Words" 
                    onChange={this.AgentCodeHandler} 
                    value={this.state.agentCode} 
                />

                <Label value="Face Value" />
                <TextBox
                    placeholder="Enter Value" 
                    onChange={this.CertificateNumberHandler}
                    value={this.state.certificateNumber}
                />

                <Label value="ISIN:" />
                <TextBox
                    placeholder="Sr. Number" 
                    onChange={this.CertificateNumberHandler}
                    value={this.state.certificateNumber}
                />
                <SubLabel subValue="(to be filled by DP)" />

                <Label value="Current Status of Securities:"/>
                <Dropdown
                    droplist={this.state.list.self_agent}
                    ItemSelect={this.Self_AgentHandler}
                    select={this.state.self_agent} />

                <h2 className="Heading">Folio Details</h2>
                
                <Divider />

                <Label value="Folio Number:"/>
                <TextBox
                    placeholder="Enter Number" 
                    onChange={this.AgentNameHandler}
                    value={this.state.agentName} 
                />

                <Label value="Certificate Number:"/>
                <TextBox
                    placeholder="From" 
                    onChange={this.AgentNameHandler}
                    value={this.state.agentName} 
                />
                <TextBox 
                    placeholder="To" 
                    onChange={this.AgentCodeHandler} 
                    value={this.state.agentCode} 
                />

                <Label value="Distinctive Numbers:"/>
                <TextBox
                    placeholder="From" 
                    onChange={this.AgentNameHandler}
                    value={this.state.agentName} 
                />
                <TextBox 
                    placeholder="To" 
                    onChange={this.AgentCodeHandler} 
                    value={this.state.agentCode} 
                />

                <Label value="Quantity:" />
                <TextBox
                    placeholder="Enter Value" 
                    onChange={this.CertificateNumberHandler}
                    value={this.state.certificateNumber}
                />

                <Label value="Total Number Of Certificates:" />
                <TextBox
                    placeholder="Sr. Number" 
                    onChange={this.CertificateNumberHandler}
                    value={this.state.certificateNumber}
                />

                <h2 className="Heading">Locked-in Security Details</h2>
                
                <Divider />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Lock-In Reason:" />
                        <TextBox
                            placeholder="Enter Reason" 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                        />
                    </div>

                    <div>
                        <Label value="Lock-In Release Date:" />
                        <TextBox
                            placeholder="Enter Date" 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default PhysicalShareform;