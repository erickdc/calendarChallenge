import React, { Component } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import styles from "./index.css";

export default class Headers extends Component {
    render() {
        const { headers, amount } = this.props;
        return (<Container>
            <Row>
            {headers.map((day) => <Col className={'background'} xs={amount/7}><p>{day}</p></Col>)}</Row>
            </Container>);
    }
}