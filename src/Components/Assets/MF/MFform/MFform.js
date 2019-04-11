import React, { Component } from 'react';
import Label from '../../../UI/Label/Label';
import './MFform.css'
import Dropdown from '../../../UI/Dropdown/Dropdown';
import TextBox from '../../../UI/TextBox/TextBox';
import { Divider } from '@material-ui/core';
import NomineeDetails from '../../Common/NomineeDetails/NomineeDetails';
import HolderDetails from '../../Common/HolderDetails/HolderDetails';
import SubLabel from '../../../UI/Label/SubLabel/SubLabel';

class MFform extends Component {
    state = {
        self_agent: "select one",
        agentName: "",
        agentCode: "",
        KVPissue: "select one",
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
        Fname: "select one",
        ISIC: "select one",
        Tfund: "select one",
        Tpayment: "select one",


        list: {
            Fname: [
                "CDSL",
                "NSDL"
            ],
            ISCI: [
                "Resident Indian",
                "Nonresident Indian",
                "Foreign National"
            ],
            Tfund: [
                "Equity",
                "Balanced",
                "Debt",
                "Liquid",
                "Gilt",
                "Dynamic",
                "ETF",
                "Speciality",
                "Tax Saving",
                "Theme Fund",
                "Hybrid Equity Orieted",
                "Hybrid Debt Orieted"
            ],
            Tpayment: [
                "SIP",
                "Non-SIP"
            ],



            self_agent: ["Self", "Agent"],
            issueDroplist: [
                "1",
                "2",
                "3",
                "4",
                "5"],
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
    FnameHandler = item => this.setState({ Fname: item });

    ISICHandler = item => this.setState({ ISIC: item });

    TfundHandler = item => this.setState({ Tfund: item });

    TpaymentHandler = item => this.setState({ Tpayment: item });

    IssueDroplistHandler = item => this.setState({ KVPissue: item });

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
    ModeOfHoldingHandler = item => this.setState({ holdingMode: item });

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
        return (
            <div>
                <h2 className="Heading">Mutual Fund Holding Details</h2>

                <Divider />

                <Label value="How many mutual fund Folioes you hold as sole/first or second holder:" />
                <Dropdown
                    droplist={this.state.list.issueDroplist}
                    ItemSelect={this.IssueDroplistHandler}
                    select={this.state.NSCissue} />




                <h2 className="Heading">Folio Details</h2>

                <Divider />

                <Label value="Folio Number:" />
                <TextBox
                    type="text"
                    placeholder="Folio Number"
                    onChange={this.NoOfCertificates}
                    value={this.state.noOfCertificates} />

                <p>(Please fill up the certificate details below)</p>



                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Folio (AMC) Name/ Description (ISIN Description)" />
                        <Dropdown
                            droplist={this.state.list.Fname}
                            ItemSelect={this.FnameHandler}
                            select={this.state.Fname} />
                    </div>

                    <div>
                        <Label
                            value="Number of Units:" />
                        <TextBox
                            type="text"
                            placeholder="Number of Units"
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber} />

                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="ISIC UCC" />
                        <Dropdown
                            droplist={this.state.list.ISIC}
                            ItemSelect={this.ISICHandler}
                            select={this.state.ISIC} />
                    </div>

                    <div>
                        <Label
                            value="Client ID:" />
                        <TextBox
                            type="text"
                            placeholder="Client ID"
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber} />

                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Type of Funds:" />
                        <Dropdown
                            droplist={this.state.list.Tfund}
                            ItemSelect={this.TfundHandler}
                            select={this.state.Tfund} />
                    </div>

                    <div>
                        <Label
                            value="DMAT Account#:" />
                        <TextBox
                            type="text"
                            placeholder="DMAT Account"
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber} />

                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Type of payment:" />
                        <Dropdown
                            droplist={this.state.list.Tpayment}
                            ItemSelect={this.TpaymnetHandler}
                            select={this.state.Tpayment} />
                    </div>

                </div>

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

export default MFform;