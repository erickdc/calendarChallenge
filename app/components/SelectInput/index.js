import React from 'react';
import { Form } from 'react-bootstrap';

const SelectInput = (props) => {
    const { controlId, label, required, name, type, 
        handleChange, placeholder, errorMessage, as, options } = props;
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
            >
            <option disabled selected="selected">Choose</option>
            {options.map((op) =>  <option>{op}</option>)}
            </Form.Control>
            <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
        </Form.Group>
    );
}

export default SelectInput;