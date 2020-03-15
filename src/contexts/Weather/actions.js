import { toast } from 'react-toastify';
import api from '../../services/api';
import { Types } from './reducer';
// import 'babel-polyfill';

const getCoordinates = dispatch => {
  async function success(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    toast.success(`We found you! :) Lat: ${latitude}, Long: ${longitude}`);

    const response = await api.get(
      `/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`
    );

    dispatch({
      type: Types.HANDLE_WEATHER_SUCCESS,
      payload: { weather: response.data.list },
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

const getWeatherInfo = async (cityName, dispatch) => {
  try {
    const response = await api.get(
      `/forecast?q=${cityName}&appid=${process.env.API_KEY}`
    );

    // eslint-disable-next-line no-console
    console.log(response);
    dispatch({
      type: Types.HANDLE_WEATHER_SUCCESS,
      payload: { weather: response.data.list },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.log(error);
  }
};

export { getCoordinates, getWeatherInfo };
