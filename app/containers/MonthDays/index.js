import React, { Component } from "react";
import { Row, Container, Col } from 'react-bootstrap';
import Day from "../../components/Day";
import { getDaysArray } from "../../utils/index";

export default class MonthDays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: getDaysArray(31),
        };
    }
    getDays = (partialDays) => {
        return partialDays.map((day) => <Day number={day}></Day>);
    }
    renderDays = (days) => {
        let daysComponent = [];
        for(var i = 0; i < days.length; i+=7) {
            daysComponent.push(<Row>{this.getDays(days.slice(i, i + 7))}</Row>);
        }
        return daysComponent;
    }
    render() {
        const { days } = this.state;
        return (<Container>
            {this.renderDays(days)}
        </Container>);
    }


}