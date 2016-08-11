import React from 'react';
import { CityCardListItem } from '../';

export default (props) => (
  <div>
    {
      props.cities.map((city, key) => (
        <CityCardListItem
          city={city}
          cityId={key}
          currentWeather={props.currentWeather[city.city] || {}}
          key={key}
          actions={props.actions}
        />
      ))
    }
  </div>
);
