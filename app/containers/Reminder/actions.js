/*
 *
 * LanguageProvider actions
 *
 */

import { CREATE_REMINDER, SELECT_REMINDER, CLEAN_SELECTED_REMINDER } from './constants';

export function createReminder(reminder) {
  return {
    type: CREATE_REMINDER,
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
