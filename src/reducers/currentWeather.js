import * as types from '../constants/actionTypes';

export default function currentWeather(state = {}, action) {
  switch (action.type) {
    case types.CURRENT_WEATHER_LOADED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
