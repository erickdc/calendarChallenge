import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './index.css';

export default class Headers extends Component {
  render() {
    const { headers } = this.props;
    return (
      <Container fluid={true}>
        <Row>
          {headers.map(day => (
            <Col key={`header${day}`} className={'background'}>
              <p>{day}</p>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
