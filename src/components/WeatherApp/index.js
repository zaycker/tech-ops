import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { City, CitiesList } from '../';

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
    <City
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
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">Weather in cities</span>
      </div>
    </header>
    <main className="mdl-layout__content">
      <div className="page-content">{variableChild(props)}</div>
    </main>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
