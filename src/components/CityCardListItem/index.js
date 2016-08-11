import './style.css';
import React from 'react';
import { Link } from 'react-router';

export default ({ cityId, city, currentWeather, actions }) => (
  <div className="mdl-card mdl-shadow--2dp city-card-square">
    <div className="mdl-card__title mdl-card--expand">
      <h2 className="mdl-card__title-text">{city.city}</h2>
    </div>
    <div className="mdl-card__supporting-text">
      {getCardInner(currentWeather.main)}
    </div>
    <div className="mdl-card__actions mdl-card--border">
      <Link
        className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
        to={`/cities/${cityId}`}
      >
        Подробнее
      </Link>
    </div>
  </div>
);

function getCardInner(data) {
  return data && data.hasOwnProperty('temp') ?
    (
      <div>
        {`Температура: ${data.temp}℃`}<br />
        {`Давление: ${Math.round(760 * data.pressure / 1013)} мм.рт.ст`}<br />
        {`Относительная влажность: ${data.humidity}%`}
      </div>
    ) : 'Загрузка...';
}