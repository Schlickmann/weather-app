import produce from 'immer';

const Types = {
  HANDLE_FIELD_CHANGE: '@weatherContext/HANDLE_FIELD_CHANGE',
  HANDLE_WEATHER_REQUEST: '@weatherContext/HANDLE_WEATHER_REQUEST',
  HANDLE_WEATHER_SUCCESS: '@weatherContext/HANDLE_WEATHER_SUCCESS',
  HANDLE_WEATHER_FAILURE: '@weatherContext/HANDLE_WEATHER_FAILURE',
};

const INITIAL_STATE = {
  loading: false,
  coordinater: null,
  city: '',
  unit: '',
  weather: [],
};

function reducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.HANDLE_FIELD_CHANGE: {
        draft[action.payload.field] = action.payload.content;
        break;
      }
      case Types.HANDLE_WEATHER_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.HANDLE_WEATHER_SUCCESS: {
        draft.weather = action.payload.weather;
        draft.loading = false;
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
