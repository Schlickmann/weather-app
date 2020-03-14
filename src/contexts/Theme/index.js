import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { setTheme } from './actions';
import { reducer, INITIAL_STATE, Types } from './reducer';

const themeContext = createContext(INITIAL_STATE);
const { Provider } = themeContext;

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const value = {
    ...state,
    setThemeRequest: theme => {
      dispatch({
        type: Types.HANDLE_THEME_CHANGE,
      });

      setTheme(theme, dispatch);
    },
  };

  return <Provider value={value}>{children}</Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { themeContext, ThemeProvider };
