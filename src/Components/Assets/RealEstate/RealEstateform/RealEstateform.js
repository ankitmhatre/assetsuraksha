import React, { Component } from 'react';
import Label from '../../../UI/Label/Label';
import './RealEstateform.css'
import Dropdown from '../../../UI/Dropdown/Dropdown';
import TextBox from '../../../UI/TextBox/TextBox';
import { Divider } from '@material-ui/core';
import NomineeDetails from '../../Common/NomineeDetails/NomineeDetails';
import HolderDetails from '../../Common/HolderDetails/HolderDetails';
import SubLabel from '../../../UI/Label/SubLabel/SubLabel';
import FormButton from '../../../UI/Button/FormButton';

class RealEstateform extends Component {
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
            realEstateType: [
                "Land",
                "NA plot",
                "Bungalow",
                "Flat",
                "Marriage Hall",
                "VII Issue, 1-Oct-2016 Onwards",
                "Industrial Unit",
                "Godown",
                "warehouse"
            ],
            typeOfLand: [
                "Agriculture Land", 
                "N.A (Non agriculture land)", 
                "Garden(Falbagh)",
                "Industrial land", 
                "Saltpan land", 
                "Mining land",
                "Other",
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
                <h2 className="Heading">Real Estate Holding Details</h2>

                <Divider />

                <Label value="Real Estate Type:"/>
                <Dropdown 
                    droplist={this.state.list.realEstateType}
                    ItemSelect={this.IssueDroplistHandler}
                    select={this.state.NSCissue} />
                
                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Type of Land:"/>
                        <Dropdown 
                            droplist={this.state.list.typeOfLand}
                            ItemSelect={this.IssueDroplistHandler}
                            select={this.state.NSCissue} />
                    </div>

                    <div>
                        <Label value="Purchased by:"/>
                        <TextBox
                            placeholder="Purchased by" 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                            />
                    </div>
                </div>

                <Label value="Current ownership is by virtue of:"/>
                <TextBox
                    placeholder="Ownership" 
                    onChange={this.CertificateNumberHandler}
                    value={this.state.certificateNumber}
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

                <h2 className="Heading">Location Details</h2>

                <Divider />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label 
                            value="Village:" />
                        <TextBox
                            placeholder="Village" 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                            />
                        <SubLabel
                            subValue="(as per 7/12 records)" />
                    </div>

                    <div>
                        <Label 
                            value="Taluka:" />
                        <TextBox
                            placeholder="Taluka" 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                            />
                        <SubLabel
                            subValue="(as per 7/12 records)" />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label 
                            value="District:" />
                        <TextBox
                            placeholder="District" 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                            />
                        <SubLabel
                            subValue="(as per 7/12 records)" />
                    </div>

                    <div>
                        <Label 
                            value="Survey Number:" />
                        <TextBox
                            placeholder="Survey Number" 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                            />
                        <SubLabel
                            subValue="(as per 7/12 records)" />
                    </div>
                </div>


                <h2 className="Heading">7/12 Details</h2>

                <Divider />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label 
                            value="Land Area:" />
                        <TextBox
                            placeholder="Area" 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                            />
                    </div>

                    <div>
                        <Label 
                            value="Type of Land:" />
                        <Dropdown 
                            droplist={this.state.list.typeOfLand}
                            ItemSelect={this.IssueDroplistHandler}
                            select={this.state.NSCissue} />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label 
                            value="Class of Land:" />
                        <TextBox
                            placeholder="Class" 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                            />
                    </div>

                    <div>
                        <Label 
                            value="Registered Crop:" />
                        <TextBox
                            placeholder="Crop" 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                            />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label 
                            value="Is part of land declared as forst land:" />
                        <Dropdown 
                            droplist={this.state.list.minor}
                            ItemSelect={this.IssueDroplistHandler}
                            select={this.state.NSCissue} />
                    </div>

                    <div>
                        <Label 
                            value="If yes, please specify the forest area:" />
                        <TextBox
                            placeholder="Forest Area" 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                            />
                    </div>
                </div>           


                
                <h2 className="Heading">Infrastructure Details</h2>

                <Divider />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label 
                            value="Access to land:" />
                        <TextBox
                            placeholder="eg. car, walkway" 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                            />
                    </div>

                    <div>
                        <Label 
                            value="Fencing:" />
                        <Dropdown 
                            droplist={this.state.list.minor}
                            ItemSelect={this.IssueDroplistHandler}
                            select={this.state.NSCissue} />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label 
                            value="Electricity:" />
                        <Dropdown 
                            droplist={this.state.list.minor}
                            ItemSelect={this.IssueDroplistHandler}
                            select={this.state.NSCissue} />
                    </div>

                    <div>
                        <Label 
                            value="Water source:" />
                        <TextBox
                            placeholder="eg. well, river, etc." 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                            />
                    </div>
                </div>

                <Label 
                    value="Any structure present on the land:" />
                <TextBox
                    placeholder="eg. road, walkway, etc." 
                    onChange={this.CertificateNumberHandler}
                    value={this.state.certificateNumber}
                    />

                <h2 className="Heading">Other Details</h2>

                <Divider />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label 
                            value="Distance from nearest village:" />
                        <TextBox
                            placeholder="Distance" 
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber}
                            />
                    </div>

                    <div>
                        <Label 
                            value="Land survey done:" />
                        <Dropdown 
                            droplist={this.state.list.minor}
                            ItemSelect={this.IssueDroplistHandler}
                            select={this.state.NSCissue} />
                    </div>
                </div>

                <Label 
                    value="Is land under the possession of the owner(s):" />
                <Dropdown 
                    droplist={this.state.list.minor}
                    ItemSelect={this.IssueDroplistHandler}
                    select={this.state.NSCissue} />             
            
            <div style={{margin: "40px 10px"}}>
                <FormButton 
                value="Submit Real Estate"
                onClick={this.SubmitNSC} />
            </div>

            </div>
        )
    }
}

export default RealEstateform;