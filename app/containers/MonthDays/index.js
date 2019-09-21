import React, { Component } from "react";
import { Row, Container } from 'react-bootstrap';
import Day from "../../components/Day";
import EditorModal from "../../components/EditorModal";
import { getDaysArray, getDayInMonth, getUnixTimestamp } from "../../utils/index";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import  * as reminderActions from "../Reminder/actions";
class MonthDays extends Component {
    constructor(props) {
        super(props);
        const amountOfDays = getDayInMonth(9,2019);
        const days = getDaysArray(amountOfDays);

        this.state = {
            amountOfDays,
            days,
            showModal: false,
            selectedDay: 0,
            renderedDays: this.renderDays(days, amountOfDays),
        };
    }
    handleClose = () => {
        this.setState({ ...this.state, showModal: false });
        console.log('lasdfasdfasd');
        this.props.actions.cleanSelectedReminder();
    }
    onClick = (day) => {
        this.setState({ ...this.state, showModal: true, selectedDay: day });
    }
    getDays = (partialDays) => {
        return partialDays.map((day) => <Day key={getUnixTimestamp(day.actualDate)}
        onClick={this.onClick} {...day}></Day>);
    }
    renderDays = (days, amountOfDays) => {
        let daysComponent = [];
        for(var i = 0; i < amountOfDays; i+=7) {
            daysComponent.push(<Row>{this.getDays(days.slice(i, i + 7))}</Row>);
        }
        return daysComponent;
    }
    render() {
        const { renderedDays, showModal, selectedDay } = this.state;
        const { showEditModal } = this.props;
        return (<Container fluid={true}>
        {showModal && !showEditModal && (<EditorModal
            selectedDay={selectedDay}
            show={showModal} 
            handleClose={this.handleClose} />)}
        {showEditModal && (<EditorModal
            show={showEditModal}
            isEdit 
            handleClose={this.handleClose} />)}
        {renderedDays}
        </Container>);
    }
}


export function mapStateToProps({ reminder }, ownProps) {
    return {
        showEditModal: reminder.showEditModal,
        selectedReminder: reminder.selectedReminder,
    };
  }
   
  export function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
          ...reminderActions
        }, dispatch)
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MonthDays);