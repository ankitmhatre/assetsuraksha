import React, { Component } from 'react';
import Label from '../../../UI/Label/Label';
import './MFform.css'
import Dropdown from '../../../UI/Dropdown/Dropdown';
import TextBox from '../../../UI/TextBox/TextBox';
import { Divider } from '@material-ui/core';
import NomineeDetails from '../../Common/NomineeDetails/NomineeDetails';
import HolderDetails from '../../Common/HolderDetails/HolderDetails';
import SubLabel from '../../../UI/Label/SubLabel/SubLabel';
import FormButton from '../../../UI/Button/FormButton';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const token = localStorage.getItem("token")

class MFform extends Component {
    state = {
        noOfFolios: "",
        folioNo: "",
        folioName: "Select one",
        ISIC: "select one",
        typeOfFund: "Select one",
        noOfUnits: "",
        clientID: "",
        dmatAccount: "",
        postOffice: "",
        location: "",
        typeOfPayment: "select one",

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

        dealingDistributor: "Select one",
        distributorName: "",
        ARNcode: "",

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

        debitManadate: "Select one",
        bankName: "",
        accountType: "",
        accountNumber: "",
        branchName: "",

        list: {
            folio_name: [
                
            ],
            ISCI: [
                
            ],
            type_of_fund: [
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
            type_of_payment: [
                "SIP",
                "Non-SIP"
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

        const MFdata = {
            noOfFolios: this.state.noOfFolios,
            folioNo: this.state.folioNo,
            folioName: this.state.folioName,
            ISIC: this.state.ISIC,
            typeOfFund: this.state.typeOfFund,
            noOfUnits: this.state.noOfUnits,
            clientID: this.state.clientID,
            dmatAccount: this.state.dmatAccount,
            postOffice: this.state.postOffice,
            location: this.state.location,
            typeOfPayment: this.state.typeOfPayment,

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

            dealingDistributor: this.state.dealingDistributor,
            distributorName: this.state.distributorName,
            ARNcode: this.state.ARNcode,

            nominationPlace: this.state.nominationPlace,
            nomineeFname: this.state.nomineeFname,
            nomineeMname: this.state.nomineeMname,
            nomineeLname: this.state.nomineeLname,
            nomineeCity: this.state.nomineeCity,
            nomineeState: this.state.nomineeState,
            nomineePincode: this.state.nomineePincode,
            nomineePAN: this.state.nomineePAN,
            relationship: this.state.relationship,
            nomineeContact: this.state.nomineeContact,

            debitManadate: this.state.debitManadate,
            bankName: this.state.bankName,
            accountType: this.state.accountType,
            accountNumber: this.state.accountNumber,
            branchName: this.state.branchName,

            date: date,
            time: time,
        }

        axios.post('Api Link',
            { 
                headers: {
                    "Authorization" : `Bearer ${token}`
                },
            }, MFdata)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    }
   
    render() {
        return (
            <div>
                <h2 className="Heading">Mutual Fund Holding Details</h2>

                <Divider />

                <Label value="Number of Mutual Fund Folioes:" />
                <TextBox 
                    placeholder="Enter Number" 
                    onChange={this.TextInputHandler}
                    name="noOfFolios"
                    value={this.state.noOfFolios} 
                    />

                <h2 className="Heading">Folio Details</h2>

                <Divider />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Folio Number:" />
                        <TextBox
                            placeholder="Folio Number"
                            name="folioNo"
                            onChange={this.TextInputHandler}
                            value={this.state.folioNo} />
                    </div>
                    <div>
                        <Label value="Folio Name/ Description" />
                        <Dropdown
                            droplist={this.state.list.folio_name}
                            name="folioName"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.folioName} />
                        <SubLabel subValue="AMC/ ISIN Description " />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="ISIC UCC" />
                        <Dropdown
                            droplist={this.state.list.ISIC}
                            name="ISIC"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.ISIC} />
                    </div>
                    <div>
                        <Label value="Type of Funds:" />
                        <Dropdown
                            droplist={this.state.list.type_of_fund}
                            name="typeOfFund"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.typeOfFund} />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Number of Units:" />
                        <TextBox
                            name="noOfUnits"
                            placeholder="Number of Units"
                            onChange={this.TextInputHandler}
                            value={this.state.noOfUnits} />
                    </div>
                    <div>
                        <Label value="Client ID:" />
                        <TextBox
                            name="clientID"
                            placeholder="Client ID"
                            onChange={this.TextInputHandler}
                            value={this.state.clientID} />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="DMAT Account#:" />
                        <TextBox
                            placeholder="DMAT Account"
                            name="dmatAccount"
                            onChange={this.TextInputHandler}
                            value={this.state.dmatAccount} />
                    </div>
                    <div>
                        <Label value="Type of payment:" />
                        <Dropdown
                            droplist={this.state.list.type_of_payment}
                            name="typeOfPayment"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.typeOfPayment} />
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

                <Label value="Are you dealing through Distributor/ sub-broker:" />
                <Dropdown
                    droplist={this.state.list.minor}
                    name="dealingDistributor"
                    ItemSelect={this.DropdownHandler}
                    select={this.state.dealingDistributor} />

                { this.state.dealingDistributor === "Yes" ?
                (<div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Name of the distributor/ sub broker:" />
                        <TextBox
                            placeholder="Enter Name"
                            name="distributorName"
                            onChange={this.TextInputHandler}
                            value={this.state.distributorName} />
                    </div>
                    <div>
                        <Label value="ARN Code of distributor/ sub broker:" />
                        <TextBox
                            placeholder="Client ID"
                            name="ARNcode"
                            onChange={this.TextInputHandler}
                            value={this.state.ARNcode} />
                    </div>
                </div>): null }

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

                <h2 className="Heading">Debit Manadate Linkage</h2>

                <Divider />

                <Label value="Is it linked with a Debit Manadate:" />
                <Dropdown
                    droplist={this.state.list.minor}
                    name="debitManadate"
                    ItemSelect={this.DropdownHandler}
                    select={this.state.debitManadate} />

                { this.state.debitManadate === "Yes" ? 
                ( <div>
                    <div className="Holder">
                        <div className="HolderDiv">
                            <Label value="Bank Name:" />
                            <TextBox
                                placeholder="Enter Bank Name"
                                name="bankName"
                                onChange={this.TextInputHandler}
                                value={this.state.bankName} />
                        </div>
                        <div>
                            <Label value="Account Type:" />
                            <TextBox
                                placeholder="Enter Account Type"
                                name="accountType"
                                onChange={this.TextInputHandler}
                                value={this.state.accountType} />
                        </div>
                    </div>

                    <div className="Holder">
                        <div className="HolderDiv">
                            <Label value="Account Number:" />
                            <TextBox
                                placeholder="Enter Account Number"
                                name="accountNumber"
                                onChange={this.TextInputHandler}
                                value={this.state.accountNumber} />
                        </div>
                        <div>
                            <Label value="Branch Name:" />
                            <TextBox
                                placeholder="Enter Branch Name"
                                name="branchName"
                                onChange={this.TextInputHandler}
                                value={this.state.branchName} />
                        </div>
                    </div>
                </div>
                ): null
                }

                <div style={{margin: "40px 10px"}}>
                <NavLink to="/user_profile/MF" >
                    <FormButton 
                        value="Submit"
                        onClick={this.SubmitHandler} />
                </NavLink>  
                </div>
                
            </div>
        )
    }
}

export default MFform;