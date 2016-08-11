import {
  CITY_DAILY_WEATHER_API_URL,
  CITY_CURRENT_WEATHER_API_URL,
  API_KEY
} from '../constants';

export async function getDailyCityWeather(cityObject) {
  const getRequestUrl = CITY_DAILY_WEATHER_API_URL +
      `?q=${cityObject.city},${cityObject.countryCode}&appid=${API_KEY}&cnt=1`;
  try {
    const response = await window.fetch(getRequestUrl);
    return await response.json();
  } catch (e) {
    return null;
  }
}

export async function getCurrentCityWeather(cityObject) {
  const getRequestUrl = CITY_CURRENT_WEATHER_API_URL +
    `?q=${cityObject.city},${cityObject.countryCode}&appid=${API_KEY}&units=metric`;
  try {
    const response = await window.fetch(getRequestUrl);
    return await response.json();
  } catch (e) {
    return null;
  }
}
