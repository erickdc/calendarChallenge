import React, { Component } from "react";
import { Alert } from 'react-bootstrap';

export default class Reminder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { message } = this.props;
        return (<Alert variant={'success'}>{message}</Alert>);
    }
}