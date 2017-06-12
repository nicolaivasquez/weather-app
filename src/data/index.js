import axios from 'axios';
import { todayStub, forecastStub} from './sample';

const host = 'http://localhost:9500';

export const getCities = (input) => {
  return axios.get(`${host}/cities`, {
    params: {
      q: input,
    }
  });
}

export const getTodayWeather = (cityId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todayStub);
    }, 2000)
  });
}

export const getForecastWeather = (cityId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(forecastStub);
    }, 2000)
  });
}
