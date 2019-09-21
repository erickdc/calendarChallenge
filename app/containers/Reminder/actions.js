/*
 *
 * Reminder actions
 *
 */

import {
  CREATE_REMINDER,
  SELECT_REMINDER,
  CLEAN_SELECTED_REMINDER,
  UPDATE_REMINDER,
} from './constants';

export function createReminder(reminder) {
  return {
    type: CREATE_REMINDER,
    reminder,
  };
}

export function updateReminder(reminder) {
  return {
    type: UPDATE_REMINDER,
    reminder,
  };
}
export function selectReminder(reminder) {
  return {
    type: SELECT_REMINDER,
    reminder,
  };
}
export function cleanSelectedReminder() {
  return {
    type: CLEAN_SELECTED_REMINDER,
  };
}
