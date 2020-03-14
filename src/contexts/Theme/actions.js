import { Types } from './reducer';

const setTheme = (theme, dispatch) => {
  dispatch({ type: Types.HANDLE_THEME_CHANGE, theme });
};

export { setTheme };
