import * as types from '../constants/actionTypes';

export default function dailyWeather(state = {}, action) {
  switch (action.type) {
    case types.DAILY_WEATHER_LOADED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
