import React, {Component} from 'react';
import Bot from '../Bot/Bot';
import './Button.css'

class Button extends Component {
    state = {
        bot: false,
        buttonName: 'BOT'
    }

    BotButtonHandler = () => {
        if (this.state.buttonName === 'X') {
            this.setState({
                bot: false,
                buttonName: 'BOT',
            })
        } else {
            this.setState({
                bot: true,
                buttonName: 'X',
            })
        }
    }

    render () { 
        return (
            <div >
                <div className="BoxPosition">
                {this.state.bot && <Bot />}
                </div>
                <div className="position">
                <button 
                    className="botButton"
                    onClick={this.BotButtonHandler}>
                    {this.state.buttonName}
                </button>
                </div>
                
                
            </div>   
        )
    }   
}

export default Button;