import React, { Component } from 'react';
import { connect } from 'react-redux';
import Headers from '../Headers';
import MonthDays from '../../containers/MonthDays';
import { getCurrentCalendarHeader, weekDays } from '../../utils';
import { Row, Col, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as appActions from '../../containers/App/actions';

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  nextMonth = () => {};
  render() {
    const { selectedMonth, actions } = this.props;
    return (
      <div>
        <Row>
          <Col xs={12} md={10}>
            <Headers headers={[getCurrentCalendarHeader(selectedMonth)]} />
          </Col>
          <Col xs={12} md={1}>
            <Button onClick={actions.previousMonth.bind()} variant="light">
              Previous
            </Button>
          </Col>
          <Col xs={12} md={1}>
            <Button onClick={actions.nextMonth.bind(this)} variant="light">
              Next
            </Button>
          </Col>
        </Row>

        <Headers headers={weekDays} amount={weekDays.length} />
        <MonthDays selectedMonth={selectedMonth} />
      </div>
    );
  }
}

export function mapStateToProps({ app }) {
  return {
    selectedMonth: app.currentSelectedDate,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...appActions,
      },
      dispatch,
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);
