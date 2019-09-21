import React from 'react';
import { Form } from 'react-bootstrap';

const SelectInput = (props) => {
    const { controlId, label, required, name, type, 
        handleChange, placeholder, errorMessage, as, options, value } = props;
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
                    defaultValue={value === '' ? 'Choose' : value }
            >
            <option disabled>Choose</option>
            {options.map((op, index) =>  <option key={index.toString()}>{op}</option>)}
            </Form.Control>
            <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
        </Form.Group>
    );
}

export default SelectInput;