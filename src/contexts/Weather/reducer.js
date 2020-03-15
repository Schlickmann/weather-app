import produce from 'immer';
import { fromUnixTime } from 'date-fns';
import { formatToTimeZone } from 'date-fns-timezone';

const Types = {
  HANDLE_FIELD_CHANGE: '@weatherContext/HANDLE_FIELD_CHANGE',
  HANDLE_WEATHER_REQUEST: '@weatherContext/HANDLE_WEATHER_REQUEST',
  HANDLE_WEATHER_SUCCESS: '@weatherContext/HANDLE_WEATHER_SUCCESS',
  HANDLE_WEATHER_FAILURE: '@weatherContext/HANDLE_WEATHER_FAILURE',
};

const INITIAL_STATE = {
  date: new Date(),
  loading: false,
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
        const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

        draft.weather = action.payload.weather.map(day => ({
          ...day,
          day_formatted: formatToTimeZone(fromUnixTime(day.dt), 'YYYY/MM/DD', {
            timeZone,
          }),
          time: formatToTimeZone(fromUnixTime(day.dt), 'HH:mm', {
            timeZone,
          }),
        }));
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
