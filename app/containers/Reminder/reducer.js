/*
 *
 * Reminder reducer
 *
 */
import produce from 'immer';

import {
  CREATE_REMINDER,
  SELECT_REMINDER,
  CLEAN_SELECTED_REMINDER,
  SHOW_EDIT_MODAL,
  UPDATE_REMINDER,
} from './constants';

export const initialState = {
  reminders: [],
  selectedReminder: {},
  showEditModal: false,
};

/* eslint-disable default-case, no-param-reassign */
const reminderReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case CREATE_REMINDER: {
        return {
          ...state,
          reminders: [...state.reminders, action.reminder],
        };
      }
      case UPDATE_REMINDER: {
        const { reminders } = state;
        const updatedReminder = action.reminder;
        const reminderSelectedIndex = reminders.findIndex(
          r => r.id === updatedReminder.id,
        );
        reminders[reminderSelectedIndex] = updatedReminder;
        return {
          ...state,
          reminders,
        };
      }
      case SELECT_REMINDER: {
        return {
          ...state,
          selectedReminder: action.reminder,
          showEditModal: true,
        };
      }
      case CLEAN_SELECTED_REMINDER: {
        return {
          ...state,
          selectedReminder: {},
          showEditModal: false,
        };
      }
      case SHOW_EDIT_MODAL: {
        return {
          ...state,
          showEditModal: true,
        };
      }
      default:
        return state;
    }
  });

export default reminderReducer;
