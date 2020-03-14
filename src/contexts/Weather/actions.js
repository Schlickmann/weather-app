import { toast } from 'react-toastify';

import api from '../../services/api';
import { Types } from './reducer';

const getCoordinates = () => {
  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    toast.success(`Lat: ${latitude}, Long: ${longitude}`)
  }

  function error() {
    toast.error('Unable to retrieve your location');
  }

  if (!navigator.geolocation) {
    toast.error('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

export { getCoordinates };