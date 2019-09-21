  
const validate = (state) => {
    let errors = {};
    if (state.city.trim() === '') {
       errors.city = 'Please provide a city';
    }
    if (state.message.trim() === '') {
        errors.message = 'Please provide a message';
    }
    if (state.message.length > 30) {
        errors.message = 'Max 30 chars';
    }
    if (state.color.trim() === '') {
        errors.color = 'Please select a color';
    }
    return errors;
}

export default validate;