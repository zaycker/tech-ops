import React from 'react';
import { Link } from 'react-router';
import { Card, CardTitle, CardText, CardMenu, CardActions, IconButton, Textfield } from 'react-mdl';
import { CURRENT_POSITION_CITY } from '../../constants';

export default ({ cityId, city, currentWeather, actions }) => (
  <Card shadow={0} style={{
    width: '320px',
    height: '220px',
    margin: '20px',
    float: 'left'
  }}>
    <CardTitle expand style={{ background: '#46b6ac', color: '#fff' }}>
      {
        city === CURRENT_POSITION_CITY ? 'Текущая позиция' : <Textfield
          label="Город"
          value={city}
          onChange={e => actions.cityChange(cityId, e.target.value, false)}
          onBlur={e => actions.cityChange(cityId, e.target.value)}
        />
      }
    </CardTitle>
    <CardMenu style={{color: '#fff'}}>
      <IconButton
        name="close"
        onClick={() => actions.removeCity(cityId)}
      />
    </CardMenu>
    <CardText>
      {getCardInner(currentWeather.main)}
    </CardText>
    <CardActions border>
      <Link
        className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
        to={`/cities/${cityId}`}
      >
        Подробнее
      </Link>
    </CardActions>
  </Card>
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