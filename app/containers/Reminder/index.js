import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Alert } from 'react-bootstrap';
import  * as reminderActions from "./actions";
class Reminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorMapping: {
                Red: 'danger', 
                Blue: 'primary', 
                Green: 'success', 
                Grey: 'secondary',
                Yellow: 'warning'
            }
        }
    }
    onClick = (e) => {
        this.props.actions.selectReminder({...this.props});
        e.stopPropagation();
    }
    render() {
        const { message, currentDateTime, color } = this.props;
        const { colorMapping } = this.state;
        const time = currentDateTime.toLocaleTimeString();
        return (<Alert onClick={this.onClick} 
            variant={colorMapping[color]}>{time + ' ' + message}</Alert>);
    }
}

export function mapStateToProps(state, ownProps) {
    return {
    };
  }
   
  export function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({
        ...reminderActions
      }, dispatch)
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Reminder);