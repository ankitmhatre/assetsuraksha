import React, { Component } from 'react';
import Label from '../../../UI/Label/Label';
import './RealEstateform.css'
import Dropdown from '../../../UI/Dropdown/Dropdown';
import TextBox from '../../../UI/TextBox/TextBox';
import { Divider } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import HolderDetails from '../../Common/HolderDetails/HolderDetails';
import SubLabel from '../../../UI/Label/SubLabel/SubLabel';
import FormButton from '../../../UI/Button/FormButton';

class RealEstateform extends Component {
    state = {
        realEstateType: "select one",
        typeOfLand: "select one",
        purchasedBy: "",
        ownership: "",

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

        village: "",
        taluka: "",
        district: "",
        surveyNo: "",
        landArea: "",
        typeOfLand7_12: "Select one",
        classOfLand: "",
        registeredCrop: "",
        isForestLand: "Select one",
        forestArea: "",
        accessToLand: "Select one",
        fencing: "Select one",
        electricity: "Select one",
        waterSource: "Select one",
        structureOnLand: "Select one",
        nearestVillageDistance: "",
        landSurveyDone: "Select one",
        possesionOfLand: "select one",

        list: {
            self_agent: ["Self", "Agent"],
            real_estate_type: [
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
            type_of_land: [
                "Agriculture Land", 
                "N.A (Non agriculture land)", 
                "Garden(Falbagh)",
                "Industrial land", 
                "Saltpan land", 
                "Mining land",
                "Other",
            ],
            structure_on_land: [
                "No Structure Present",
                "shed",
                "temple",
                "wall",
                "House",
                "Tower",
                "Pipeline",
                "Others"
            ],
            water_source: [
                "Borewell",
                "Well",
                "River",
                "Pipeline",
                "Others"
            ],
            access_to_land: [
                "Car road",
                "All season walk way",
                "No direct access to land"
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

    }


    render() {
        return(
            <div>
                <h2 className="Heading">Real Estate Holding Details</h2>

                <Divider />

                <Label value="Real Estate Type:"/>
                <Dropdown 
                    droplist={this.state.list.real_estate_type}
                    name="realEstateType"
                    ItemSelect={this.DropdownHandler}
                    select={this.state.realEstateType} />
                
                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Type of Land:"/>
                        <Dropdown 
                            droplist={this.state.list.type_of_land}
                            name="typeOfLand"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.typeOfLand} />
                    </div>

                    <div>
                        <Label value="Purchased by:"/>
                        <TextBox
                            placeholder="Purchased by" 
                            name="purchasedBy"
                            onChange={this.TextInputHandler}
                            value={this.state.purchasedBy}
                            />
                    </div>
                </div>

                <Label value="Current ownership is by virtue of:"/>
                <TextBox
                    placeholder="Ownership" 
                    name="ownership"
                    onChange={this.TextInputHandler}
                    value={this.state.ownership}
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

                <h2 className="Heading">Location Details</h2>

                <Divider />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Village:" />
                        <TextBox
                            placeholder="Village" 
                            name="village"
                            onChange={this.TextInputHandler}
                            value={this.state.village}
                            />
                        <SubLabel subValue="(as per 7/12 records)" />
                    </div>

                    <div>
                        <Label value="Taluka:" />
                        <TextBox
                            placeholder="Taluka" 
                            name="taluka"
                            onChange={this.TextInputHandler}
                            value={this.state.taluka}
                            />
                        <SubLabel subValue="(as per 7/12 records)" />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="District:" />
                        <TextBox
                            placeholder="District" 
                            name="district"
                            onChange={this.TextInputHandler}
                            value={this.state.district}
                            />
                        <SubLabel subValue="(as per 7/12 records)" />
                    </div>

                    <div>
                        <Label value="Survey Number:" />
                        <TextBox
                            placeholder="Survey Number" 
                            name="surveyNo"
                            onChange={this.TextInputHandler}
                            value={this.state.surveyNo}
                            />
                        <SubLabel subValue="(as per 7/12 records)" />
                    </div>
                </div>


                <h2 className="Heading">7/12 Details</h2>

                <Divider />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Land Area:" />
                        <TextBox
                            placeholder="Area" 
                            name="landArea"
                            onChange={this.TextInputHandler}
                            value={this.state.landArea}
                            />
                    </div>

                    <div>
                        <Label value="Type of Land:" />
                        <Dropdown 
                            droplist={this.state.list.type_of_land}
                            name="typeOfLand7_12"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.typeOfLand7_12} />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Class of Land:" />
                        <TextBox
                            placeholder="Class" 
                            name="classOfLand"
                            onChange={this.TextInputHandler}
                            value={this.state.classOfLand}
                            />
                    </div>

                    <div>
                        <Label value="Registered Crop:" />
                        <TextBox
                            placeholder="Crop" 
                            name="registeredCrop"
                            onChange={this.TextInputHandler}
                            value={this.state.registeredCrop}
                            />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Is part of land declared as forst land:" />
                        <Dropdown 
                            droplist={this.state.list.minor}
                            name="isForestLand"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.isForestLand} />
                    </div>
                    { 
                        this.state.isForestLand === "Yes" ? (
                        <div>
                            <Label value="Specify the forest area:" />
                            <TextBox
                                placeholder="Forest Area" 
                                name="forestArea"
                                onChange={this.TextInputHandler}
                                value={this.state.forestArea}
                                />
                        </div>
                        ): null
                    }
                    
                </div>           

                <h2 className="Heading">Infrastructure Details</h2>

                <Divider />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Access to land:" />
                        <Dropdown 
                            droplist={this.state.list.access_to_land}
                            name="accessToLand"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.accessToLand} />
                    </div>

                    <div>
                        <Label value="Fencing:" />
                        <Dropdown 
                            droplist={this.state.list.minor}
                            name="fencing"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.fencing} />
                    </div>
                </div>

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Electricity:" />
                        <Dropdown 
                            droplist={this.state.list.minor}
                            name="electricity"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.electricity} />
                    </div>

                    <div>
                        <Label value="Water source:" />
                        <Dropdown 
                            droplist={this.state.list.water_source}
                            name="waterSource"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.waterSource} />
                    </div>
                </div>

                <Label value="Any structure present on the land:" />
                <Dropdown 
                    droplist={this.state.list.structure_on_land}
                    name="structureOnLand"
                    ItemSelect={this.DropdownHandler}
                    select={this.state.structureOnLand} />

                <h2 className="Heading">Other Details</h2>

                <Divider />

                <div className="Holder">
                    <div className="HolderDiv">
                        <Label value="Distance from nearest village:" />
                        <TextBox
                            placeholder="Distance" 
                            name="nearestVillageDistance"
                            onChange={this.TextInputHandler}
                            value={this.state.nearestVillageDistance}
                            />
                    </div>

                    <div>
                        <Label value="Land survey done:" />
                        <Dropdown 
                            droplist={this.state.list.minor}
                            name="landSurveyDone"
                            ItemSelect={this.DropdownHandler}
                            select={this.state.landSurveyDone} />
                    </div>
                </div>

                <Label value="Is land under the possession of the owner(s):" />
                <Dropdown 
                    droplist={this.state.list.minor}
                    name="possesionOfLand"
                    ItemSelect={this.DropdownHandler}
                    select={this.state.possesionOfLand} />             
            
                <div style={{margin: "40px 10px"}}>     
                    <NavLink to="/user_profile/real_estate" >
                        <FormButton 
                            value="Submit"
                            onClick={this.SubmitNSC} />
                    </NavLink>          
                </div>

            </div>
        )
    }
}

export default RealEstateform;