import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReminderEditor from '../../containers/ReminderEditor';

// eslint-disable-next-line react/prefer-stateless-function
class EditorModal extends Component {
  render() {
    const {
      show,
      handleClose,
      selectedDay,
      isEdit,
      selectedReminder,
    } = this.props;
    return (
      <Modal show={show} animation={false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {`${isEdit ? 'Edit ' : 'Create '}  Reminder`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReminderEditor
            isEdit={isEdit}
            selectedReminder={selectedReminder}
            handleClose={handleClose}
            selectedDay={selectedDay}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

export function mapStateToProps({ reminder }) {
  const { selectedReminder } = reminder;
  return {
    selectedReminder,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorModal);

EditorModal.propTypes = {
  handleClose: PropTypes.func,
  selectedDay: PropTypes.number,
  isEdit: PropTypes.bool,
  selectedReminder: PropTypes.object,
  show: PropTypes.bool,
};
