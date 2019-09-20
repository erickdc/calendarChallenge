import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Form, Container, Col, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import Input from "../../components/Input";
import  * as reminderActions from "../../containers/Reminder/actions";
import validate from "./validate";

const CustomInput = ({ value, onClick }) => (
    <Col>
        <Button variant="dark" onClick={onClick}>{value}</Button>
    </Col>
);
class Reminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            message: '',
            city: '',
            currentDateTime: new Date(),
            errors: { 
                city: '',
                message: '',
            }
        };
    }
    save = (e) => {
        e.preventDefault();
        const errors = validate(this.state);
        this.setState({ errors });
        if (Object.keys(errors).length  > 0) {
          return false;
        }
        const { message, city, currentDateTime } = this.state;
        this.props.actions.createReminder({
            message,
            city,
            currentDateTime,
        });
    }
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value});
    }
    handleDateChange = (date) => {
        this.setState({
            currentDateTime: date
        });
    }
    render() {
        const { errors } = this.state;
        return (<Container>
          <Form>
                <Form.Row>
                    <Input
                        as={Col}
                        controlId="message"
                        label="Message"
                        required
                        name="message"
                        type="text"
                        placeholder="Write a reminder message"
                        handleChange={this.handleChange}
                        errorMessage={errors["message"]}
                    ></Input>
                </Form.Row>
                <Form.Row>
                    <Input
                        as={Col}
                        controlId="city"
                        label="City"
                        required
                        name="city"
                        type="text"
                        placeholder="City"
                        handleChange={this.handleChange}
                        errorMessage={errors["city"]}
                    ></Input>
                </Form.Row>
                <Form.Row>

                    <Form.Group as={Col} controlId={'dateTime'}>
                        <Form.Label>Date and Time</Form.Label>

                        <DatePicker
                            selected={this.state.currentDateTime}
                            onChange={this.handleDateChange}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                            customInput={<CustomInput />}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Button as={Col} variant="primary" type="submit" onClick={this.save}>
                        Save Changes
                    </Button>
                </Form.Row>    
             </Form>
        </Container>);
    }
}

export function mapStateToProps(state) {
    return {};
  }
   
  export function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({
        ...reminderActions
      }, dispatch)
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Reminder);