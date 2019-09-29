import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';
import PropTypes from 'prop-types';
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
        // eslint-disable-next-line react/jsx-no-bind
        onClick={onClick.bind(this, number)}
        className={`box scroll ${weekend}`}
      >
        <Row className="number">{number}</Row>
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
  const { actualDate } = ownProps;
  return {
    actualDate,
    reminders: reminder.reminders
      .filter(r =>
        moment(r.currentDateTime.toLocaleDateString()).isSame(
          `${actualDate.getMonth() + 1}/${
            ownProps.number
          }/${actualDate.getFullYear()}`,
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

Day.propTypes = {
  actualDate: PropTypes.object,
  number: PropTypes.number,
  onClick: PropTypes.func,
  reminders: PropTypes.array,
};
