import React from 'react';
import './FormButton.css'

const FormButton = (props) => (
    <input 
        onClick={props.onClick}
        type="submit" 
        name="" 
        value={props.value} 
        className="FormButton" />
)

export default FormButton;