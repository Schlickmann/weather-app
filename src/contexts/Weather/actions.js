import { toast } from 'react-toastify';
import api from '../../services/api';
import { Types } from './reducer';

const getCoordinates = (unit, dispatch) => {
  function success(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    toast.success(`We found you! :) Lat: ${latitude}, Long: ${longitude}`);

    api
      .get(
        `/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}&units=${unit}`
      )
      .then(response =>
        dispatch({
          type: Types.HANDLE_WEATHER_SUCCESS,
          payload: { weather: response.data },
        })
      )
      .catch(() => {
        toast.error('Something went wrong :( please, try again later');

        dispatch({
          type: Types.HANDLE_WEATHER_FAILURE,
        });
      });
  }

  function error() {
    toast.error('Unable to retrieve your location');

    dispatch({
      type: Types.HANDLE_WEATHER_FAILURE,
    });
  }

  if (!navigator.geolocation) {
    toast.error('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });
  }
};

const getWeatherInfo = (cityName, unit, dispatch) => {
  api
    .get(`/forecast?q=${cityName}&appid=${process.env.API_KEY}&units=${unit}`)
    .then(response =>
      dispatch({
        type: Types.HANDLE_WEATHER_SUCCESS,
        payload: { weather: response.data },
      })
    )
    .catch(() => {
      toast.error('Something went wrong :( please, try again later');

      dispatch({
        type: Types.HANDLE_WEATHER_FAILURE,
      });
    });
};

export { getWeatherInfo, getCoordinates };
