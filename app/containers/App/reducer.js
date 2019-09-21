/*
 *
 * Reminder reducer
 *
 */
import produce from 'immer';

export const initialState = {
  selectedReminder: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
    }
  });

export default appReducer;
