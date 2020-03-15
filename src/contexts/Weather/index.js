import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { getCoordinates, getWeatherInfo } from './actions';
import { reducer, INITIAL_STATE, Types } from './reducer';

const weatherContext = createContext(INITIAL_STATE);
const { Provider } = weatherContext;

const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const value = {
    ...state,
    weatherRequest: (cityName, unit) => {
      dispatch({
        type: Types.HANDLE_WEATHER_REQUEST,
      });

      if (cityName.trim()) {
        getWeatherInfo(cityName, unit, dispatch);
      } else {
        getCoordinates(unit, dispatch);
      }
    },
    setField: (field, content) => {
      dispatch({
        type: Types.HANDLE_FIELD_CHANGE,
        payload: { field, content },
      });
    },
  };

  return <Provider value={value}>{children}</Provider>;
};

WeatherProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { weatherContext, WeatherProvider };
