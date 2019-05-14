import React, { Component } from 'react';
import Label from '../../../UI/Label/Label';
import './DPStockform.css'
import Dropdown from '../../../UI/Dropdown/Dropdown';
import TextBox from '../../../UI/TextBox/TextBox';
import { Divider } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import NomineeDetails from '../../Common/NomineeDetails/NomineeDetails';
import HolderDetails from '../../Common/HolderDetails/HolderDetails';
import FormButton from '../../../UI/Button/FormButton';

class DPStockform extends Component {
    state = {
        isDematerialized: "select one",
        noOfPhysicalShares: "",
        totalDematsAcounts: "",
        noOfCertificates: "",
        sr_no: "",
        dpName: "",
        depositoryType: "Select one",
        DMATtype: "Select one",
        dpID: "",
        clientID: "",
        dmatAccount: "",

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

        subBroker: "Select one",
        brokerName: "",
        exchangeName: "Select one",
        SEBIregistration: "",
        TradingMode: "Select one",
        TradingCode: "",
        
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
            minor: ["Yes", "No"],
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

    TextInputHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    DropdownHandler = (name, item) => {
        this.setState({ [name]: item });
    }   

    SubmitHandler = () => {

    }

    SubmitAndAddHandler = () => {

    }

    render() {
        return (
            <div>
                <h2 className="Heading">DP & Stock / Share holding Details</h2>

                <Divider />

                <Label value="Are your all shares dematerialized:" />
                <Dropdown
                    droplist={this.state.list.minor}
                    name="isDematerialized"
                    ItemSelect={this.DropdownHandler}
                    select={this.state.isDematerialized} />

                {
                this.state.isDematerialized === "No" ? (
                    <div>
                        <Label value="Number of Physical Share Certificates:" />
                        <TextBox
                            placeholder="Total Certificates"
                            name="noOfPhysicalShares"
                            onChange={this.TextInputHandler}
                            value={this.state.noOfPhysicalShares} />
                    </div>
                ) : null
                }

                <h2 className="Heading">Depository Participant Account Details</h2>

                <Divider />
                
                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Total number of Demat accounts:" />
                        <TextBox
                            placeholder="Total Accounts"
                            name="totalDematsAcounts"
                            onChange={this.TextInputHandler}
                            value={this.state.totalDematsAcounts} />
                    </div>

                    <div>
                    <Label value="Total number of DPStock certificates you hold:" />
                    <TextBox
                        placeholder="Total Certificates"
                        name="noOfCertificates"
                        onChange={this.TextInputHandler}
                        value={this.state.noOfCertificates} />
                    </div>
                </div>

                <Label value="Sr. Number:" />
                <TextBox
                    placeholder="Sr. Number"
                    name="sr_no"
                    onChange={this.TextInputHandler}
                    value={this.state.sr_no} />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="DP Name:" />
                        <TextBox
                            placeholder="DP Name"
                            name="dpName"
                            onChange={this.TextInputHandler}
                            value={this.state.dpName} />
                    </div>

                    <div>
                        <Label value="Depository Type" />
                        <Dropdown
                            droplist={this.state.list.certificate_format}
                            name="depositoryType"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.depositoryType} />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="DMAT Account Type" />
                        <Dropdown
                            droplist={this.state.list.DMAT}
                            name="DMATtype"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.DMATtype} />
                    </div>

                    <div>
                        <Label
                            value="DP ID:" />
                        <TextBox
                            placeholder="DP ID"
                            name="dpID"
                            onChange={this.TextInputHandler}
                            value={this.state.dpID} />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Client ID:" />
                        <TextBox
                            name="clientID"
                            placeholder="Client ID"
                            onChange={this.TextInputHandler}
                            value={this.state.clientID} />
                    </div>

                    <div>
                        <Label value="DMAT Account #:" />
                        <TextBox
                            name="dmatAccount"
                            placeholder="DMAT Account"
                            onChange={this.TextInputHandler}
                            value={this.state.dmatAccount} />
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
                    modeOfHolding={this.state.list.modeOfHolding}
                    minor={this.state.list.minor}
                    TextInputHandler={this.TextInputHandler}
                    DropdownHandler={this.DropdownHandler}
                />

                <Divider />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Are you dealing through sub-broke:" />
                        <Dropdown
                            name="subBroker"
                            droplist={this.state.list.sub_broker}
                            ItemSelect={this.DropdownHandler}
                            select={this.state.subBroker} />
                    </div>

                    <div>
                        <Label
                            value="Name of the broker/ sub broker:" />
                        <TextBox
                            name="brokerName"
                            placeholder="Name of the broker/ sub broker"
                            onChange={this.TextInputHandler}
                            value={this.state.brokerName}
                        />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Name of Exchange:" />
                        <Dropdown
                            droplist={this.state.list.Exchange}
                            name="exchangeName"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.exchangeName} />
                    </div>
                    <div>
                        <Label
                            value="SEBI registration #:" />
                        <TextBox
                            placeholder="SEBI registration"
                            name="SEBIregistration"
                            onChange={this.TextInputHandler}
                            value={this.state.SEBIregistration}
                        />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Trading Mode:" />
                        <Dropdown
                            droplist={this.state.list.Tmode}
                            name="TradingMode"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.TradingMode} />
                    </div>
                    <div>
                        <Label
                            value="Trading code:" />
                        <TextBox
                            placeholder="Trading code"
                            name="TradingCode"
                            onChange={this.TextInputHandler}
                            value={this.state.TradingCode}
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
                    relationshipList={this.state.list.relationshipList}
                    minor={this.state.list.minor}
                    TextInputHandler={this.TextInputHandler}
                    DropdownHandler={this.DropdownHandler}
                />

                <div style={{margin: "40px 10px"}}>
                <NavLink to="/user_profile/dp_stock">
                    <FormButton 
                        value="Submit"
                        onClick={this.SubmitHandler} />
                </NavLink>  

                </div>

            </div>
        )
    }
}

export default DPStockform;