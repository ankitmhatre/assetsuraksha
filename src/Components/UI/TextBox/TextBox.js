import React from 'react';
import './TextBox.css';

const TextBox = props => (
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            className="TextBox" />
)

export default TextBox;
