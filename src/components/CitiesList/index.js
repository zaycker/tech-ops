import React from 'react';
import { CityCardListItem, CardNew } from '../';

export default (props) => (
  <div>
    {
      props.cities.map((city, key) => (
        <CityCardListItem
          city={city}
          cityId={key}
          currentWeather={props.currentWeather[city] || {}}
          key={key}
          actions={props.actions}
        />
      ))
    }
    <CardNew
      key={props.cities.length}
      cities={props.cities}
      actions={props.actions}
    />
  </div>
);
