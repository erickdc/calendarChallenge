import React, { Component } from "react";
import { Row, Container, Col } from 'react-bootstrap';

import styles from "./index.css";

export default class Day extends Component {
    render() {
        const { number } = this.props;
        return (<Col xs={1} className={'box'}>{number}</Col>);
    }
}