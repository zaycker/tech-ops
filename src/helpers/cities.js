import { CITIES_LOCALSTORAGE_KEY, INITIAL_CITIES } from '../constants';

export function loadCities() {
  try {
    const cities = JSON.parse(localStorage.getItem(CITIES_LOCALSTORAGE_KEY));
    return cities.length ? cities : INITIAL_CITIES;
  } catch (e) {
    return INITIAL_CITIES;
  }
}

export function saveCities(cities) {
  try {
    localStorage.setItem(CITIES_LOCALSTORAGE_KEY, JSON.stringify(cities));
  } catch (e) {}
}