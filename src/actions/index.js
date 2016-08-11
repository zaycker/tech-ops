import * as citiesHelper from '../helpers/cities';
import * as weatherHelpers from '../helpers/openweathermap';
import * as types from '../constants/actionTypes'

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

export const loadCities = () => (dispatch, getState) => {
  const cities = citiesHelper.loadCities();
  dispatch(citiesLoaded(cities));
  cities.forEach(cityObject => loadCurrentCityWeather(cityObject, dispatch));
};

export const loadDailyCityWeatherById = (cityId) => async (dispatch, getState) => {
  const cityObject = getState().cities[cityId];
  const cityWeather = await weatherHelpers.getDailyCityWeather(cityObject);
  dispatch(dailyWeatherLoadedForCity({
    [cityObject.city]: cityWeather
  }));
};

const loadCurrentCityWeather = async (cityObject, dispatch) => {
  const cityWeather = await weatherHelpers.getCurrentCityWeather(cityObject);
  dispatch(currentWeatherLoadedForCity({
    [cityObject.city]: cityWeather
  }));
};
