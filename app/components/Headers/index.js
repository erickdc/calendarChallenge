import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
require('./index.css');

// eslint-disable-next-line react/prefer-stateless-function
export default class Headers extends Component {
  render() {
    const { headers } = this.props;
    return (
      <Container fluid>
        <Row>
          {headers.map(day => (
            <Col key={`header${day}`} className="background">
              <p>{day}</p>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

Headers.propTypes = {
  headers: PropTypes.array,
};
