import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { Layout, Header, Content } from 'react-mdl';
import { CityCard, CitiesList } from '../';

function mapStateToProps(data) {
  return { data };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const variableChild = (props) => (
  props.params.id ? (
    <CityCard
      actions={props.actions}
      cityId={props.params.id}
      cities={props.data.cities}
      currentWeather={props.data.currentWeather}
      dailyWeather={props.data.dailyWeather}
    />
  ) : (
    <CitiesList
      actions={props.actions}
      cities={props.data.cities}
      currentWeather={props.data.currentWeather}
    />
  )
);

const WeatherApp = (props) => (
  <Layout>
    <Header title="Weather in cities">
    </Header>
    <Content style={{ margin: '20px' }}>{variableChild(props)}</Content>
  </Layout>
);

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
