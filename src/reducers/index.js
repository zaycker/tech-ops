import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cities from './cities';
import currentWeather from './currentWeather';
import dailyWeather from './dailyWeather';

export default combineReducers({
  cities,
  currentWeather,
  dailyWeather,
  routing: routerReducer
});
