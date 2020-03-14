import axios from 'axios';

const api = axios.create({
  baseURL: process.env.WEATHER_API,
});

export default api;
