import * as citiesHelper from '../helpers/cities';
import * as weatherHelpers from '../helpers/openweathermap';
import * as types from '../constants/actionTypes'
import { CURRENT_POSITION_CITY } from '../constants';

const citiesLoaded = (payload) => ({
  type: types.CITIES_LOADED,
  payload
});

const dailyWeatherLoadedForCity = (payload) => ({
  type: types.DAILY_WEATHER_LOADED,
  payload
});

const currentWeatherLoadedForCity = (payload) => ({
  type: types.CURRENT_WEATHER_LOADED,
  payload
});

export const loadCurrentCityWeather = (city) => async (dispatch) => {
  const cityWeather = await weatherHelpers.getCurrentCityWeather(city === CURRENT_POSITION_CITY ? null : city);
  dispatch(currentWeatherLoadedForCity({
    [city]: cityWeather
  }));
};

export const loadCities = (fetchWeather) => (dispatch, getState) => {
  const cities = citiesHelper.loadCities();
  dispatch(citiesLoaded(cities));

  if (!fetchWeather) {
    return;
  }

  cities.forEach(city => {
    if (getState().currentWeather[city]) {
      return;
    }

    dispatch(loadCurrentCityWeather(city));
  });
};

export const loadDailyCityWeatherById = (cityId) => async (dispatch, getState) => {
  const city = getState().cities[cityId];
  if (getState().dailyWeather[city]) {
    return;
  }

  const cityWeather = await weatherHelpers.getDailyCityWeather(city);
  dispatch(dailyWeatherLoadedForCity({
    [city]: cityWeather
  }));
};

export const cityChange = (cityId, value, fetchWeather = true) => (dispatch, getState) => {
  const cities = getState().cities.slice();
  cities.splice(cityId, 1, value);
  citiesHelper.saveCities(cities);
  dispatch(loadCities(fetchWeather));
};

export const removeCity = (cityId) => (dispatch, getState) => {
  const cities = getState().cities.slice();
  cities.splice(cityId, 1);
  citiesHelper.saveCities(cities);
  dispatch(loadCities());
};
