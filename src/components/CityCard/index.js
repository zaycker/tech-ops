import React from 'react';

export default ({ cityId, cities, currentWeater, dailyWeather, actions }) => (
  <div className="mdl-card mdl-shadow--2dp city-card-square">
    <div className="mdl-card__title mdl-card--expand">
      <h2 className="mdl-card__title-text">{cities[cityId].city}</h2>
    </div>
    <div className="mdl-card__supporting-text">
      {
        getCardInner(dailyWeather[cities[cityId].city] || {}, currentWeater[cities[cityId].city] || {})
      }
    </div>
  </div>
);

function getCardInner(dailyWeather, currentWeather) {
  return dailyWeather && dailyWeather.hasOwnProperty('list') ?
    (
      <div>
        {`Текущая: ${currentWeather.main && currentWeather.main.temp}℃`}
        <img src={`//openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} /><br />
        {`Утро: ${dailyWeather.list[0].temp.morn}℃`}
        <img src={`//openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} /><br />
        {`День: ${dailyWeather.list[0].temp.day}℃`}
        <img src={`//openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} /><br />
        {`Вечер: ${dailyWeather.list[0].temp.eve}℃`}
        <img src={`//openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} />
      </div>
    ) : 'Загрузка...';
}
