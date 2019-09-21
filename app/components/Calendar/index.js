import React, { Component } from 'react';
import Headers from '../Headers';
import MonthDays from '../../containers/MonthDays';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekDays: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
    };
  }

  render() {
    const { weekDays } = this.state;
    return (
      <div>
        <Headers headers={['September 2019']} />
        <Headers headers={weekDays} amount={weekDays.length} />
        <MonthDays />
      </div>
    );
  }
}
