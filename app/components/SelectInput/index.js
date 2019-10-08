import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const SelectInput = props => {
  const {
    controlId,
    label,
    required,
    name,
    type,
    handleChange,
    placeholder,
    errorMessage,
    as,
    options,
    value,
  } = props;
  return (
    <Form.Group as={as} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="select"
        required={required}
        name={name}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        isInvalid={!!errorMessage}
        defaultValue={value === '' ? 'Choose' : value}
      >
        <option disabled>Choose</option>
        {options.map((op, index) => (
          <option key={index.toString()}>{op}</option>
        ))}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default SelectInput;

SelectInput.propTypes = {
  controlId: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  as: PropTypes.object,
  options: PropTypes.array,
  value: PropTypes.any,
};
