import { toast } from 'react-toastify';

// import api from '../../services/api';
import { Types } from './reducer';

const getCoordinates = (persisted, dispatch) => {
  function success(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    toast.success(`We found you! :) Lat: ${latitude}, Long: ${longitude}`);

    dispatch({
      type: Types.HANDLE_FIND_ME_SUCCESS,
      payload: { coordinates: { latitude, longitude }, persisted },
    });
  }

  function error() {
    toast.error('Unable to retrieve your location');

    dispatch({
      type: Types.HANDLE_FIND_ME_FAILURE,
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

const getWeatherInfo = () => {};

export { getCoordinates, getWeatherInfo };
