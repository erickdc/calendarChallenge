import validate from '../validate';

describe('<Reminder Validate />', () => {
    const correctData = {
        city: 'Tegucigalpa',
        color: 'Blue',
        message: 'Reminder'
    };
    const incorrectState = {
        city: '',
        color: '',
        message: ''
    }
    describe('when validating reminder state', () => {
        it('should not return any errors', () => {
            const expected = {};
            const errors = validate(correctData);
            expect(errors).toEqual(expected);
        });
        it('should return all errors', () => {
            const expected = {
                city: 'Please provide a city',
                message: 'Please provide a message',
                color: 'Please select a color',
            };
            const errors = validate(incorrectState);
            expect(errors).toEqual(expected);
        });
        describe('when message length is greather than 30 chars', () => {
            const state = {
                city: 'Tegucigalpa',
                color: 'Blue',
                message: 'is simply dummy text of the printing and typesetting industry. '
            }
            it('should return max message error', () => {
                const expected = {
                    message: 'Max 30 chars',
                };
                const errors = validate(state);
                expect(errors).toEqual(expected);
            });
        })
      
    })
});
