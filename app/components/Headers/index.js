import React, { Component } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import styles from "./index.css";

export default class Headers extends Component {
    render() {
        const { weekDays } = this.props;
        return (<Container>
            <Row>
            {weekDays.map((day) => <Col className={'background'} xs={1}><p>{day}</p></Col>)}</Row>
            </Container>);
    }
}