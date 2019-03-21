import React, { Component } from 'react';
import TextBox from '../UI/TextBox/TextBox';
import Label from '../UI/Label/Label';
import './NSCcalculator.css'

class NSCcalculator extends Component {

    state = {
        investmentAmount: '',
        NSCissue: '',
        ROI: 0,
        duration: 0,
        maturityAmount: '',
        displayMenu: false,
        select: 'Select Certificate Type',
        issue7_2011: '' 
    }

    NSCCalculate = () => {
        // NSC Maturity value = P × (1+r/200)2n
        let maturity = this.state.investmentAmount*(Math.pow((1 + this.state.ROI/200), 2*(this.state.duration)));
        this.setState({maturityAmount: maturity})
    }

    Reset = () => {
        this.setState({
            investmentAmount: '',
            ROI: 0,
            duration: 0,
            maturityAmount: '',
            select: 'Select Certificate Type',
        })
    }

    DropDownHandler = () => {
        this.setState({displayMenu: !this.state.displayMenu})
    }

    Issue7_2011Handler = () => {
        this.setState({
            select: 'VII Issue, Upto 30-Nov-2011',
            displayMenu: false,
            ROI: 6,
            duration: 6,
        })
    }

    InvestmentAmountHandler = (event) => {
        this.setState({investmentAmount: event.target.value})
    }

    Issue7_2012Handler = () => {
        this.setState({
            select: 'VII Issue, 1-Dec-2011 to 31-Mar-2012',
            displayMenu: false,
            ROI: 8.4,
            duration: 5,
        })
    }

    Issue7_2013Handler = () => {
        this.setState({
            select: 'VII Issue, 1-Apr-2012 to 31-Mar-2013',
            displayMenu: false,
            ROI: 8.6,
            duration: 5,
        })
    }

    Issue7_mar2016Handler = () => {
        this.setState({
            select: 'VII Issue, 1-Apr-2013 to 31-Mar-2016',
            displayMenu: false,
            ROI: 8.5,
            duration: 5,
        })
    }

    Issue7_sep2016Handler = () => {
        this.setState({
            select: 'VII Issue, 1-Apr-2016 to 30-Sep-2016',
            displayMenu: false,
            ROI: 8.1,
            duration: 5,
        })
    }

    Issue7_2016OnwardsHandler = () => {
        this.setState({
            select: 'VII Issue, 1-Oct-2016 Onwards',
            displayMenu: false,
            ROI: 8,
            duration: 5,
        })
    }

    Issue9_2012Handler = () => {
        this.setState({
            select: 'IX Issue, 1-Dec-2011 to 31-Mar-2012',
            displayMenu: false,
            ROI: 8.7,
            duration: 10,
        })
    }

    Issue9_2013Handler = () => {
        this.setState({
            select: 'IX Issue, 1-Apr-2012 to 31-Mar-2013',
            displayMenu: false,
            ROI: 8.9,
            duration: 10,
        })
    }

    Issue9_2015Handler = () => {
        this.setState({
            select: 'VII Issue, 1-Apr-2013 to 19-Dec-2015',
            displayMenu: false,
            ROI: 8.8,
            duration: 10,
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    <Label 
                        value="Investment Amount (INR):"/>
                </div>
                <TextBox 
                placeholder="Enter Amount" value={this.state.investmentAmount} onChange={this.InvestmentAmountHandler}/>
                <div>
                    <Label value="NSC Issue/ Certificate Type:"/>
                </div>

                <div className="Dropdown">
                    <div className="Button" onClick={this.DropDownHandler}> {this.state.select} </div>
                    { this.state.displayMenu && (
                    <ul className="DropdownList">
                        <li><div onClick={this.Issue7_2011Handler}>VII Issue, Upto 30-Nov-2011</div></li>
                        <li><div onClick={this.Issue7_2012Handler}>VII Issue, 1-Dec-2011 to 31-Mar-2012</div></li>
                        <li><div onClick={this.Issue7_2013Handler}>VII Issue, 1-Apr-2012 to 31-Mar-2013</div></li>
                        <li><div onClick={this.Issue7_mar2016Handler}>VII Issue, 1-Apr-2013 to 31-Mar-2016</div></li>
                        <li><div onClick={this.Issue7_sep2016Handler}>VII Issue, 1-Apr-2016 to 30-Sep-2016</div></li>
                        <li><div onClick={this.Issue7_2016OnwardsHandler}>VII Issue, 1-Oct-2016 Onwards</div></li>
                        <li><div onClick={this.Issue9_2012Handler}>IX Issue, 1-Dec-2011 to 31-Mar-2012</div></li>
                        <li><div onClick={this.Issue9_2013Handler}>IX Issue, 1-Apr-2012 to 31-Mar-2013</div></li>
                        <li><div onClick={this.Issue9_2015Handler}>IX Issue, 1-Apr-2013 to 19-Dec-2015</div></li>
                    </ul>
                    )
                    }
                </div>

                <div>
                    <Label value="Rate Of Interest (%):"/>
                </div>
                    <TextBox value={this.state.ROI} />
                <div>    
                    <Label value="Duration (years):"/>
                </div>
                    <TextBox value={this.state.duration}/>

                <div>
                    <input onClick={this.NSCCalculate} type="submit" name="" value="Calculate" className="Calculate" />
                    <input onClick={this.Reset} type="submit" name="" value="Reset" className="Calculate" />
                </div>
                
                <div>
                    <Label value="Maturity Amount (INR):"/>
                </div>
                    <TextBox
                    value={this.state.maturityAmount} />
            </div>
        )
    }
}

export default NSCcalculator;