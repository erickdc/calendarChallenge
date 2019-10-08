import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Input = props => {
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
    value,
  } = props;
  return (
    <Form.Group as={as} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        required={required}
        name={name}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        isInvalid={!!errorMessage}
        value={value}
      />
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default Input;

Input.propTypes = {
  controlId: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  as: PropTypes.object,
  value: PropTypes.any,
};
