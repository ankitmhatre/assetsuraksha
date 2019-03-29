import React, {Component} from 'react';
import './TextBox.css';

class TextBox extends Component {
    state ={
        change: ""
    }

    onChangeHandler = (event) => {
        this.setState({change: event.target.value})
        console.log(event.target.value)
    }

    render() {
        return  (
            <input 
                type={this.props.type} 
                placeholder={this.props.placeholder}
                onChange={this.onChangeHandler}
                value={this.props.value}
                className="TextBox" />
    )
    }
} 

export default TextBox;
