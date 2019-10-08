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
  getNextMonthDays,
  getPreviousMonthDays,
} from '../../utils/index';
import * as reminderActions from '../Reminder/actions';
export class MonthDays extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      selectedDate: new Date(),
    };
  }

  handleClose = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ ...this.state, showModal: false });
    this.props.actions.cleanSelectedReminder();
  };

  onClick = selectedDate => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ ...this.state, showModal: true, selectedDate });
  };

  getDays = partialDays =>
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
    const { showModal, selectedDate } = this.state;
    const { showEditModal, selectedMonth } = this.props;
    const month = selectedMonth.getMonth();
    const year = selectedMonth.getFullYear();
    const amountOfDays = getDayInMonth(month, year);
    const previousMonthDays = getPreviousMonthDays(year, month).reverse();
    const currentMonthDays = getDaysArray(
      new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), 1),
      new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0),
      true,
    );
    const nextMonthDays = getNextMonthDays(
      year,
      month,
      42 - previousMonthDays.length - currentMonthDays.length,
    );
    const days = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
    return (
      <Container fluid>
        {showModal && !showEditModal && (
          <EditorModal
            selectedMonth={selectedMonth}
            selectedDate={selectedDate}
            show={showModal}
            handleClose={this.handleClose}
          />
        )}
        {showEditModal && (
          <EditorModal
            selectedMonth={selectedMonth}
            show={showEditModal}
            isEdit
            handleClose={this.handleClose}
          />
        )}
        {this.renderDays(days, days.length)}
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
