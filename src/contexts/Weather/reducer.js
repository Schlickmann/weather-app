import produce from 'immer';

const Types = {
  HANDLE_FIND_ME_REQUEST: '@weatherContext/HANDLE_FIND_ME_REQUEST',
  HANDLE_FIND_ME_SUCCESS: '@weatherContext/HANDLE_FIND_ME_SUCCESS',
  HANDLE_FIND_ME_FAILURE: '@weatherContext/HANDLE_FIND_ME_FAILURE',
  HANDLE_WEATHER_REQUEST: '@weatherContext/HANDLE_WEATHER_REQUEST',
  HANDLE_WEATHER_SUCCESS: '@weatherContext/HANDLE_WEATHER_SUCCESS',
  HANDLE_WEATHER_FAILURE: '@weatherContext/HANDLE_WEATHER_FAILURE',
};

const INITIAL_STATE = {
  loading: false,
  coordinater: null,
  city: ''
};

function reducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.HANDLE_FIND_ME_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.HANDLE_FIND_ME_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;

        action.payload.setWeather({
          signed: true,
          token: action.payload.token,
        });
        break;
      }
      case Types.HANDLE_FIND_ME_FAILURE: {
        draft.loading = false;
        break;
      }
      case Types.HANDLE_WEATHER_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.HANDLE_WEATHER_SUCCESS: {
        draft.token = null;
        draft.signed = false;
        draft.loading = false;

        action.payload.setWeather({});
        break;
      }
      case Types.HANDLE_WEATHER_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

export { reducer, INITIAL_STATE, Types };