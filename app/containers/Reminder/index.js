import React, { Component } from "react";
import { Alert } from 'react-bootstrap';

export default class Reminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorMapping: {
                Red: 'danger', 
                Blue: 'primary', 
                Green: 'success', 
                Grey: 'secondary',
                Yellow: 'warning'
            }
        }
    }
    onClick = () => {
        alert(`funciona ${this.props.message}`);
    }
    render() {
        const { message, currentDateTime, color } = this.props;
        const { colorMapping } = this.state;
        const time = currentDateTime.toLocaleTimeString();
        return (<Alert onClick={this.onClick} 
            variant={colorMapping[color]}>{time + ' ' + message}</Alert>);
    }
}