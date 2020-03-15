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
  current: null,
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
        draft.current = {
          ...action.payload.weather[0],
          main: {
            ...action.payload.weather[0].main,
            temp: Math.round(action.payload.weather[0].main.temp),
            temp_min: Math.round(action.payload.weather[0].main.temp_min),
            temp_max: Math.round(action.payload.weather[0].main.temp_max),
          },
        };

        draft.weather = action.payload.weather.map(day => ({
          ...day,
          main: {
            ...day.main,

            temp_min: Math.round(day.main.temp_min),
            temp_max: Math.round(day.main.temp_max),
          },
          day_formatted: formatToTimeZone(fromUnixTime(day.dt), 'YYYY/MM/DD', {
            timeZone,
          }),
          day: formatToTimeZone(fromUnixTime(day.dt), 'ddd', {
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
