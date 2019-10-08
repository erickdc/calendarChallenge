/*
 *
 * App actions
 *
 */

import { NEXT_MONTH, PREVIOUS_MONTH } from './constants';

export function nextMonth() {
  return {
    type: NEXT_MONTH,
  };
}

export function previousMonth() {
  return {
    type: PREVIOUS_MONTH,
  };
}
