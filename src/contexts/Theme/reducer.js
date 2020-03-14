import produce from 'immer';

const Types = {
  HANDLE_THEME_CHANGE: '@themeContext/HANDLE_THEME_CHANGE',
};

const INITIAL_STATE = {
  theme: 'light',
};

function reducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.HANDLE_THEME_CHANGE: {
        draft.theme = action.theme;
        break;
      }
      default:
    }
  });
}

export { reducer, INITIAL_STATE, Types };
