import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import { getCoordinates, getWeatherInfo } from './actions';
import { reducer, INITIAL_STATE, Types } from './reducer';

import usePersistedState from '../../utils/hooks/UsePersistedState';

const weatherContext = createContext(INITIAL_STATE);
const { Provider } = weatherContext;

const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [weather, setWeather, getState] = usePersistedState(
    '@weatherApp/weatherContext',
    {}
  );
  const persisted = useMemo(() => {
    return { weather, setWeather, getState };
  }, [weather, setWeather, getState]);

  const {
    weather: { coordinates, city },
  } = persisted;
  const value = {
    ...state,
    coordinates: coordinates || state.coordinates,
    city: city || state.city,
    findMeRequest: () => {
      dispatch({
        type: Types.HANDLE_FIND_ME_REQUEST,
      });

      getCoordinates(persisted, dispatch);
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
