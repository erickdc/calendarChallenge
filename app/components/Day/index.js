import React, { Component } from "react";
import { Col } from 'react-bootstrap';

import styles from "./index.css";

export default class Day extends Component {
    render() {
        const { number, onClick } = this.props;
        return (<Col onClick={onClick.bind(this, number)} 
            xs={1} className={'box'}>{number}</Col>);
    }
}