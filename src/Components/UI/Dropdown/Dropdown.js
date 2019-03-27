import React, { Component } from 'react';
import './Dropdown.css'


class Dropdown extends Component {
    state = {
        displayMenu: false,
        select: 'Select one',
    }

    DropdownHandler = () => {
        this.setState({displayMenu: !this.state.displayMenu})
    }

    closeDropdown = () => {
        this.setState({
            displayMenu: false
        })
    }

    render() {
        return(
            <div className="Dropdown">
                <div className="Dropdown__Button" onClick={this.DropdownHandler}> {this.props.select} </div>
                { this.state.displayMenu && (
                <ul className="DropdownList">                    
                    {this.props.droplist.map( item => {
                        return <li key={item} onClick={this.closeDropdown}><div style={{width: '100%'}} onClick={() => this.props.ItemSelect(item)}>{item}</div></li>
                    })}
                </ul>
                )
                }
            </div>
        )
    }
}

export default Dropdown;