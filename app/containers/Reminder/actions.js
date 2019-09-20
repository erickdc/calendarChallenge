/*
 *
 * LanguageProvider actions
 *
 */

import { CREATE_REMINDER } from './constants';

export function createReminder(reminder) {
  return {
    type: CREATE_REMINDER,
    reminder,
  };
}
