import React from 'react';
import './Label.css'

const Label = (props) => (
    <div className="LabelBox">
        <label className="Label">{props.value}</label>
    </div>
)

export default Label;