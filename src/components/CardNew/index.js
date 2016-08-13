import React from 'react';
import { Card, CardTitle, CardText, Textfield } from 'react-mdl';

export default ({ cities, actions }) => (
  <Card shadow={0} style={{
    width: '320px',
    height: '220px',
    margin: '20px',
    float: 'left'
  }}>
    <CardTitle expand style={{ background: '#46b6ac', color: '#fff' }}>
      <Textfield
        label="Город"
        onChange={() => {}}
        onBlur={e => actions.cityChange(cities.length, e.target.value)}
      />
    </CardTitle>
    <CardText>Добавить город</CardText>
  </Card>
);