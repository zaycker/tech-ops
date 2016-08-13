import React from 'react';
import { Link } from 'react-router';
import { Card, CardTitle, CardText, CardActions } from 'react-mdl';

export default ({ cityId, cities, currentWeather, dailyWeather, actions }) => (
  <Card shadow={0} style={{
    width: '320px',
    height: '250px',
    margin: '20px',
    float: 'left'
  }}>
    <CardTitle expand style={{ background: '#46b6ac', color: '#fff' }}>{cities[cityId]}</CardTitle>
    <CardText>
      {getCardInner(dailyWeather[cities[cityId]] || {}, currentWeather[cities[cityId]] || {})}
    </CardText>
    <CardActions border>
      <Link
        className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
        to={`/cities`}
      >
        Вернуться
      </Link>
    </CardActions>
  </Card>
);

function getCardInner(dailyWeather, currentWeather) {
  return dailyWeather && dailyWeather.hasOwnProperty('list') ?
    (
      <div>
        {`Текущая: ${currentWeather.main && currentWeather.main.temp}℃`}
        <img src={`//openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} /><br />
        {`Утро: ${dailyWeather.list[0].temp.morn}℃`}<br />
        {`День: ${dailyWeather.list[0].temp.day}℃`}<br />
        {`Вечер: ${dailyWeather.list[0].temp.eve}℃`}
      </div>
    ) : 'Загрузка...';
}
