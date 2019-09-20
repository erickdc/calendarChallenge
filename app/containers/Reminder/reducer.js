/*
 *
 * Reminder reducer
 *
 */
import produce from 'immer';

import { CREATE_REMINDER } from './constants';

export const initialState = {
  reminders: [],
};

/* eslint-disable default-case, no-param-reassign */
const reminderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CREATE_REMINDER:
        return { 
          ...state,
          reminders: [...state.reminders, action.reminder]
        };
    }
  });

export default reminderReducer;
