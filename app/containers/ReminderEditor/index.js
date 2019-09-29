import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Container, Col, Button, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../../components/Input';
import * as reminderActions from '../Reminder/actions';
import validate from './validate';
import SelectInput from '../../components/SelectInput';
const { requestApi } = require('../../utils/api');

const CustomInput = ({ value, onClick }) => (
  <Col>
    <Button variant="dark" onClick={onClick}>
      {value}
    </Button>
  </Col>
);
export class ReminderEditor extends Component {
  constructor(props) {
    super(props);
    let reminderInfo = {
      id: '',
      message: '',
      city: '',
      color: '',
      currentDateTime: new Date(2019, 8, this.props.selectedDay),
    };
    if (this.props.isEdit) {
      reminderInfo = this.props.selectedReminder;
      // historical weather is not free
      requestApi(
        `forecast?q=${
          reminderInfo.city
        }&cnt=1&APPID=06a4c6f153fa57c2354ab709f010f8fb`,
      ).then(result => this.setState({ forecast: result }));
    }
    this.state = {
      showModal: false,
      ...reminderInfo,
      errors: {
        city: '',
        message: '',
        color: '',
      },
    };
  }

  createReminder = () => {
    const errors = validate(this.state); // eslint-disable-line
    this.setState({ errors });
    if (Object.keys(errors).length > 0) {
      return false;
    }
    const { message, city, currentDateTime, color } = this.state;
    this.props.actions.createReminder({
      id: new Date().valueOf(),
      message,
      city,
      currentDateTime,
      color,
    });
    this.props.handleClose();
    return true;
  };

  updateReminder = () => {
    const errors = validate(this.state); // eslint-disable-line
    this.setState({ errors });
    if (Object.keys(errors).length > 0) {
      return false;
    }
    const { id, message, city, currentDateTime, color } = this.state;
    this.props.actions.updateReminder({
      id,
      message,
      city,
      currentDateTime,
      color,
    });
    this.props.handleClose();
    return true;
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDateChange = date => {
    this.setState({
      currentDateTime: date,
    });
  };

  render() {
    const {
      errors,
      message,
      city,
      currentDateTime,
      color,
      forecast,
    } = this.state;
    const { isEdit } = this.props;
    const clickEvent = isEdit ? this.updateReminder : this.createReminder;
    return (
      <Container>
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
              errorMessage={errors.message}
              value={message}
            />
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
              errorMessage={errors.city}
              value={city}
            />
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="dateTime">
              <Form.Label>Date and Time</Form.Label>

              <DatePicker
                selected={currentDateTime}
                onChange={this.handleDateChange}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                customInput={<CustomInput />}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <SelectInput
              as={Col}
              controlId="color"
              label="Color"
              required
              name="color"
              type="text"
              placeholder="Choose a color"
              errorMessage={errors.color}
              handleChange={this.handleChange}
              options={['Red', 'Blue', 'Green', 'Grey', 'Yellow']}
              value={color}
            />
          </Form.Row>
          {isEdit && forecast && forecast.cod !== '404' && (
            <Row>
              <Col>
                <p>
                  Weather:{' '}
                  <img
                    src={`http://openweathermap.org/img/w/${
                      forecast.list[0].weather[0].icon
                    }.png`}
                    alt="Avatar"
                    className="image"
                  />
                  {forecast.list[0].weather[0].description}
                </p>
              </Col>
            </Row>
          )}
          <Form.Row>
            <Button
              as={Col}
              variant="primary"
              type="submit"
              onClick={clickEvent}
            >
              Save Changes
            </Button>
          </Form.Row>
        </Form>
      </Container>
    );
  }
}

export function mapStateToProps(state, ownProps) {
  return {
    selectedDay: ownProps.selectedDay,
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
)(ReminderEditor);

CustomInput.propTypes = {
  value: PropTypes.object,
  onClick: PropTypes.func,
};

ReminderEditor.propTypes = {
  selectedDay: PropTypes.number,
  isEdit: PropTypes.func,
  selectedReminder: PropTypes.object,
  handleClose: PropTypes.func,
  actions: PropTypes.object,
};
