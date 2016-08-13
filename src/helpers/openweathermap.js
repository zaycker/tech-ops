import {
  CITY_DAILY_WEATHER_API_URL,
  CITY_CURRENT_WEATHER_API_URL,
  API_KEY
} from '../constants';

export async function getDailyCityWeather(city) {
  const getRequestUrl = CITY_DAILY_WEATHER_API_URL +
      `?q=${city}&appid=${API_KEY}&cnt=1&units=metric&lang=ru`;
  try {
    const response = await window.fetch(getRequestUrl);
    return await response.json();
  } catch (e) {
    return null;
  }
}

const getLocation = async () => {
  if (!window.navigator.geolocation) {
    return Promise.resolve(null);
  }

  return new Promise((resolve, reject) =>
    window.navigator.geolocation.getCurrentPosition(position => resolve(position), () => resolve(null)));
};

async function getCurrentCityWeatherByLocation() {
  const position = await getLocation();

  if (!position) {
    return null;
  }

  const getRequestUrl = CITY_CURRENT_WEATHER_API_URL +
    `?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`;
  try {
    const response = await window.fetch(getRequestUrl);
    return await response.json();
  } catch (e) {
    return null;
  }
}

export async function getCurrentCityWeather(city) {
  if (!city) {
    return getCurrentCityWeatherByLocation();
  }

  const getRequestUrl = CITY_CURRENT_WEATHER_API_URL +
    `?q=${city}&appid=${API_KEY}&units=metric&lang=ru`;
  try {
    const response = await window.fetch(getRequestUrl);
    return await response.json();
  } catch (e) {
    return null;
  }
}
