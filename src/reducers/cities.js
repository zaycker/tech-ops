import * as constants from '../constants';
import * as types from '../constants/actionTypes';

export default function cities(state = constants.INITIAL_CITIES, action) {
  switch (action.type) {
    case types.CITIES_LOADED:
      return action.payload;
    default:
      return state;
  }
}
