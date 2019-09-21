import * as actions from '../actions';
import reducer from '../reducer';

const initialState = {
    reminders: [],
    selectedReminder: {},
    showEditModal: false,
};

describe('Reminder Reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('should add a reminder', () => {
        const state = {
            ...initialState
        };
        const expectedResult = {
            ...initialState,
            reminders: [{}],
        }
        expect(reducer(state, actions.createReminder({}))).toEqual(expectedResult);
    });
});