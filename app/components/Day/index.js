import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';
import Reminder from '../../containers/Reminder';
import { isWeekend } from '../../utils';
require('./index.css');

class Day extends Component {
  constructor(props) {
    super(props);
    const isWeekendDay = isWeekend(this.props.actualDate);
    this.state = {
      weekend: isWeekendDay ? 'weekend' : '',
    };
  }

  render() {
    const { number, onClick, reminders } = this.props;
    const { weekend } = this.state;
    return (
      <Col
        onClick={onClick.bind(this, number)}
        className={`box scroll ${weekend}`}
      >
        <Row className={'number'}>{number}</Row>
        {reminders.map(reminder => (
          <Row>
            <Reminder {...reminder} />
          </Row>
        ))}
      </Col>
    );
  }
}

export const mapStateToProps = ({ reminder }, ownProps) => {
  return {
    actualDate: ownProps.actualDate,
    reminders: reminder.reminders
      .filter(r =>
        moment(r.currentDateTime.toLocaleDateString()).isSame(
          `9/${ownProps.number}/2019`,
        ),
      )
      .sort((a, b) => a.currentDateTime - b.currentDateTime),
  };
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Day);
