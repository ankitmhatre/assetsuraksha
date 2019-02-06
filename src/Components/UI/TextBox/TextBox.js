import React from 'react';
import './TextBox.css';

const TextBox = props => (
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            onChange={props.onChange}
            className="SearchBox" />
)

export default TextBox;
