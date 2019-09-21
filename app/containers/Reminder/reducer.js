/*
 *
 * Reminder reducer
 *
 */
import produce from 'immer';

import { CREATE_REMINDER, SELECT_REMINDER, 
  CLEAN_SELECTED_REMINDER, SHOW_EDIT_MODAL } from './constants';

export const initialState = {
  reminders: [],
  selectedReminder: {},
  showEditModal: false,
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
        case SELECT_REMINDER:
          return { 
            ...state,
            selectedReminder: action.reminder,
            showEditModal: true,
          };
        case CLEAN_SELECTED_REMINDER: 
          return { 
            ...state,
            selectedReminder: {},
            showEditModal: false,
          };
        case SHOW_EDIT_MODAL:
          return {
            ...state,
            showEditModal: true,
          }
      }
  });

export default reminderReducer;
