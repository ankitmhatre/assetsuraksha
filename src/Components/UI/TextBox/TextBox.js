import React, {Component} from 'react';
import './TextBox.css';

class TextBox extends Component {
    state ={
        change: ""
    }

    // onChangeHandler = (event) => {
    //     this.setState({change: event.target.value})
    //     console.log(event.target.value)
    // }

    render() {
        return  (
            <input 
                type="text"
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
                value={this.props.value}
                className="TextBox" />
    )
    }
} 

export default TextBox;
