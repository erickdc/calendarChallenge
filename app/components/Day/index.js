import React, { Component } from "react";
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';
import styles from "./index.css";
import Reminder from "../../containers/Reminder";

class Day extends Component {
    render() {
        const { number, onClick, reminders } = this.props;
        return (<Col onClick={onClick.bind(this, number)} 
            xs={1} className={'box'}>
            <Row>{number}</Row>
            {reminders.map((reminder) => 
            (<Row>
                <Reminder message={reminder.message}></Reminder>
            </Row>))}
        </Col>);
    }
}

export const mapStateToProps = (
    { reminder }, ownProps
  ) => {
    return {
        reminders: reminder.reminders
            .filter(r => moment(r.currentDateTime.toLocaleDateString())
            .isSame(`9/${ownProps.number}/2019`))
    };
  };
   
  export function mapDispatchToProps(dispatch) {
    return { 
        dispatch
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Day);