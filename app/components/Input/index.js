import React from 'react';
import { Form } from 'react-bootstrap';

const Input = (props) => {
    const { controlId, label, required, name, type, 
        handleChange, placeholder, errorMessage, as } = props;
    return (
        <Form.Group as={as} controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control 
                    required={required} 
                    name={name} 
                    type={type} 
                    onChange={handleChange}  
                    placeholder={placeholder}
                    isInvalid={!!errorMessage}  />
            <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
        </Form.Group>
    );
}

export default Input;