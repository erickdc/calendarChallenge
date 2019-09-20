import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';
import CreateReminder from "../../containers/CreateReminder";



export default class EditorModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, show, handleClose, selectedDay } = this.props;
        return (<Modal show={show} animation={false} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Reminder</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateReminder
           handleClose={handleClose}
           selectedDay={selectedDay}/></Modal.Body>
        </Modal>);
    }
}