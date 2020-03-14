import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import { getCoordinates } from './actions';
import { reducer, INITIAL_STATE, Types } from './reducer';

import usePersistedState from '../../utils/hooks/UsePersistedState';

const weatherContext = createContext(INITIAL_STATE);
const { Provider } = weatherContext;

const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [weather, setweather, getState] = usePersistedState(
    '@weatherApp/weatherContext',
    {}
  );
  const context = useMemo(() => {
    return { weather, setweather, getState };
  }, [weather, setweather, getState]);


  const {
    weather: { coordinates, city },
  } = context;
  const value = {
    ...state,
    coordinates: coordinates || state.coordinates,
    city: city || state.city,
    findMeRequest: () => {
      dispatch({
        type: Types.HANDLE_FIND_ME_REQUEST,
      });

      getCoordinates();
    },
    weatherRequest: () => {
      dispatch({
        type: Types.HANDLE_WEATHER_REQUEST,
      });

      getWeatherInfo();
    },
  };

  return <Provider value={value}>{children}</Provider>;
};

WeatherProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { weatherContext, WeatherProvider };