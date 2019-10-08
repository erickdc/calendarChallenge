/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import { NEXT_MONTH, PREVIOUS_MONTH } from './constants';
export const initialState = {
  currentSelectedDate: new Date(),
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case NEXT_MONTH: {
        const { currentSelectedDate } = state;
        return {
          ...state,
          currentSelectedDate: new Date(
            currentSelectedDate.getFullYear(),
            currentSelectedDate.getMonth() + 1,
            1,
          ),
        };
      }
      case PREVIOUS_MONTH: {
        const { currentSelectedDate } = state;
        return {
          ...state,
          currentSelectedDate: new Date(
            currentSelectedDate.getFullYear(),
            currentSelectedDate.getMonth() - 1,
            1,
          ),
        };
      }
      default:
        return state;
    }
  });

export default appReducer;
