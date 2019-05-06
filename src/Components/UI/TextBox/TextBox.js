import React, {Component} from 'react';
import './TextBox.css';
import axios from 'axios';

class TextBox extends Component {
    state ={

    }

    render() {
        return  (
            <input 
                type="text"
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
                name={this.props.name}
                value={this.props.value}
                className="TextBox" />
    )
    }
} 

export default TextBox;
