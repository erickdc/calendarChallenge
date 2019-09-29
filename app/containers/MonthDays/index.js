import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Day from '../../components/Day';
import EditorModal from '../../components/EditorModal';
import {
  getDaysArray,
  getDayInMonth,
  getUnixTimestamp,
  getNextEmptyDay,
} from '../../utils/index';
import * as reminderActions from '../Reminder/actions';
export class MonthDays extends Component {
  constructor(props) {
    super(props);
    const amountOfDays = getDayInMonth(8, 2019);
    const days = [
      ...getDaysArray(2019, 8, amountOfDays),
      ...getNextEmptyDay(2019, 8, 5),
    ];

    this.state = {
      amountOfDays,
      days,
      showModal: false,
      selectedDay: 0,
      renderedDays: this.renderDays(days, amountOfDays),
    };
  }

  handleClose = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ ...this.state, showModal: false });
    this.props.actions.cleanSelectedReminder();
  };

  onClick = day => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ ...this.state, showModal: true, selectedDay: day });
  };

  getDays = partialDays =>
    partialDays.map(day => (
      <Day
        key={getUnixTimestamp(day.actualDate)}
        onClick={this.onClick}
        {...day}
      />
    ));

  getEmptyDays = partialDays =>
    partialDays.map(day => (
      <Day
        key={getUnixTimestamp(day.actualDate)}
        onClick={this.onClick}
        {...day}
      />
    ));

  renderDays = (days, amountOfDays) => {
    const daysComponent = [];
    for (let i = 0; i < amountOfDays; i += 7) {
      daysComponent.push(<Row>{this.getDays(days.slice(i, i + 7))}</Row>);
    }
    return daysComponent;
  };

  render() {
    const { renderedDays, showModal, selectedDay } = this.state;
    const { showEditModal } = this.props;
    return (
      <Container fluid>
        {showModal && !showEditModal && (
          <EditorModal
            selectedDay={selectedDay}
            show={showModal}
            handleClose={this.handleClose}
          />
        )}
        {showEditModal && (
          <EditorModal
            show={showEditModal}
            isEdit
            handleClose={this.handleClose}
          />
        )}
        {renderedDays}
      </Container>
    );
  }
}

export function mapStateToProps({ reminder }) {
  return {
    showEditModal: reminder.showEditModal,
    selectedReminder: reminder.selectedReminder,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...reminderActions,
      },
      dispatch,
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MonthDays);

MonthDays.propTypes = {
  actions: PropTypes.object,
  showEditModal: PropTypes.object,
};
