import React, { Component } from "react";
import { Row, Container } from 'react-bootstrap';
import Day from "../../components/Day";
import EditorModal from "../../components/EditorModal";
import { getDaysArray, getDayInMonth } from "../../utils/index";
export default class MonthDays extends Component {
    constructor(props) {
        super(props);
        const amountOfDays = getDayInMonth(9,2019);
        const days = getDaysArray(amountOfDays);

        this.state = {
            amountOfDays,
            days,
            showModal: false,
        };
    }
    handleClose = () => {
        this.setState({ ...this.state, showModal: false });
    }
    onClick = (day) => {
        this.setState({ ...this.state, showModal: true });
    }
    getDays = (partialDays) => {
        return partialDays.map((day) => <Day onClick={this.onClick} 
        number={day.number}></Day>);
    }
    renderDays = (days, amountOfDays) => {
        let daysComponent = [];
        for(var i = 0; i < amountOfDays; i+=7) {
            daysComponent.push(<Row>{this.getDays(days.slice(i, i + 7))}</Row>);
        }
        return daysComponent;
    }
    render() {
        const { days, amountOfDays, showModal } = this.state;
        return (<Container>
         <EditorModal 
            show={showModal} 
            handleClose={this.handleClose}

        >
        </EditorModal>
            {this.renderDays(days, amountOfDays)}
        </Container>);
    }


}