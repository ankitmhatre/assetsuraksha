import React from 'react';
import './TextBox.css';

const TextBox = props => (
        <input 
            type={props.type} placeholder={props.placeholder} className="SearchBox" />
)

export default TextBox;
