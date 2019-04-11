import React, { Component } from 'react';
import Label from '../../../UI/Label/Label';
import './DPStockform.css'
import Dropdown from '../../../UI/Dropdown/Dropdown';
import TextBox from '../../../UI/TextBox/TextBox';
import { Divider } from '@material-ui/core';
import NomineeDetails from '../../Common/NomineeDetails/NomineeDetails';
import HolderDetails from '../../Common/HolderDetails/HolderDetails';
import SubLabel from '../../../UI/Label/SubLabel/SubLabel';

class KVPform extends Component {
    state = {
        self_agent: "select one",
        agentName: "",
        agentCode: "",
        KVPissue: "select one",
        noOfCertificates: "",
        sr_no: "",
        sub_broker: "Select one",
        DMAT: "Select one",
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
        Exchange: "select one",
        nomineeContact: "",
        Tmode: "select one",


        list: {
            self_agent: ["1", "2", "3", "4", "5"],
            issueDroplist: [
                "YES",
                "NO",

            ],
            DMAT: [
                "Resident Indian",
                "Non resident Indian",
                "Foreign National"
            ],
            sub_broker: [
                "YES",
                "NO"
            ],
            Exchange: [
                "BSE",
                "NSE",
                "MSEI"
            ],

            certificate_format: [
                "NSDL",
                "CDSL",

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
            ],

            Tmode: [
                "Cash",
                "F&O",
                "Currency derivative"

            ]

        }

    }

    // certificate details input handlers
    IssueDroplistHandler = item => this.setState({ KVPissue: item });

    Self_AgentHandler = item => this.setState({ self_agent: item });

    AgentNameHandler = event => this.setState({ agentName: event.target.value });

    AgentCodeHandler = event => this.setState({ agentCode: event.target.value });

    NoOfCertificates = event => this.setState({ noOfCertificates: event.target.value });

    SrNoHandler = event => this.setState({ sr_no: event.target.value });

    sub_brokerHandler = item => this.setState({ sub_broker: item });

    sub_brokerNumberHandler = event => this.setState({ sub_broker: event.target.value });

    DMATHandler = item => this.setState({ DMAT: item });

    ExchangeHandler = item => this.setState({ Exchange: item });

    ExchangeNumberHandler = item => this.setState({ Exchange: item });

    TmodeHandler = item => this.setState({ Tmode: item });

    TmodeNumberHandler = item => this.setState({ Tmode: item });

    DMATNumberHandler = event => this.setState({ DMATNumber: event.target.value });

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
                <h2 className="Heading">DP & Stock / Share holding Details</h2>

                <Divider />

                <Label value="Are your all shares dematerialized:" />
                <Dropdown
                    droplist={this.state.list.issueDroplist}
                    ItemSelect={this.IssueDroplistHandler}
                    select={this.state.KVPissue} />

                <Label value="DP (Depository Participant) Account Details:" />
                <SubLabel subValue="(Total number of Demat accounts hold by you as sole/first holder and/or 2nd holder and/or 3rd holder)" />
                <Dropdown
                    droplist={this.state.list.self_agent}
                    ItemSelect={this.Self_AgentHandler}
                    select={this.state.self_agent} />

                {
                    this.state.self_agent === "Agent" ? (
                        <div>
                            <Label value="Agent Details:" />
                            <TextBox
                                type="text"
                                placeholder="Agent Name"
                                onChange={this.AgentNameHandler}
                                value={this.state.agentName} />
                            <TextBox
                                type="text"
                                placeholder="Agent Code"
                                onChange={this.AgentCodeHandler}
                                value={this.state.agentCode} />
                        </div>
                    ) : null
                }

                <h2 className="Heading">DPStock Certificate Details</h2>

                <Divider />

                <Label value="Total number of DPStock certificates you hold:" />
                <TextBox
                    type="text"
                    placeholder="Total DPStock certificates"
                    onChange={this.NoOfCertificates}
                    value={this.state.noOfCertificates} />

                <p>(Please fill up the certificate details below)</p>

                <Label value="Sr. Number:" />
                <TextBox
                    type="text"
                    placeholder="Sr. Number"
                    onChange={this.SrNoHandler}
                    value={this.state.sr_no} />
                <Label value="DP Name:" />
                <TextBox
                    type="text"
                    placeholder="DP Name"
                    onChange={this.SrNoHandler}
                    value={this.state.sr_no} />


                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Depository Type" />
                        <Dropdown
                            droplist={this.state.list.certificate_format}
                            ItemSelect={this.CertificateFormatHandler}
                            select={this.state.certificateFormat} />
                    </div>



                    <div>
                        <Label
                            value="DP ID:" />
                        <TextBox
                            type="text"
                            placeholder="DP ID"
                            onChange={this.CertificateNumberHandler}
                            value={this.state.certificateNumber} />
                        <SubLabel
                            subValue="(as printed on the certificate)" />
                    </div>
                </div>
                <div className="HolderDiv">
                    <Label value="DMAT Account Type" />
                    <Dropdown
                        droplist={this.state.list.DMAT}
                        ItemSelect={this.DMATHandler}
                        select={this.state.DMAT} />
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Client ID:" />
                        <TextBox
                            type="text"
                            placeholder="Client ID"
                            onChange={this.IssuingPostOfficeHandler}
                            value={this.state.postOffice} />
                    </div>

                    <div>
                        <Label value="DMAT Account#:" />
                        <TextBox
                            type="text"
                            placeholder="Account"
                            onChange={this.LocationHandler}
                            value={this.state.location} />
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
                <Divider />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Are you dealing through sub-broke:" />
                        <Dropdown
                            droplist={this.state.list.sub_broker}
                            ItemSelect={this.sub_brokerHandler}
                            select={this.state.sub_broker} />
                    </div>

                    <div>
                        <Label
                            value="Name of the broker/ sub broker:" />
                        <TextBox
                            type="text"
                            placeholder="Name of the broker/ sub broker"
                        />

                    </div>
                </div>


                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Name of Exchange:" />
                        <Dropdown
                            droplist={this.state.list.Exchange}
                            ItemSelect={this.ExchangeHandler}
                            select={this.state.Exchange} />
                    </div>
                    <div>
                        <Label
                            value="SEBI registration #:" />
                        <TextBox
                            type="text"
                            placeholder="SEBI registration"
                        />

                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Trading Mode:" />
                        <Dropdown
                            droplist={this.state.list.Tmode}
                            ItemSelect={this.TmodeHandler}
                            select={this.state.Tmode} />
                    </div>
                    <div>
                        <Label
                            value="Trading code:" />
                        <TextBox
                            type="text"
                            placeholder="Trading code"
                        />

                    </div>
                </div>

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

export default KVPform;