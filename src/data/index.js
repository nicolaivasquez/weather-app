import axios from 'axios';

const host = 'http://localhost:9500';

export const getCities = (input) => {
  return axios.get(`${host}/cities`, {
    params: {
      q: input,
    }
  });
}

const apiKey = '707992c9c3cc293a34c5e547aa24a9ba';
const apiHost = '//api.openweathermap.org/data/2.5/';

export const getTodayWeather = (cityId) => {
  return axios.get(`${apiHost}weather`, {
    params: {
      id: cityId,
      appid: apiKey,
    }
  })
    .then((response) => response.data);
}

export const getForecastWeather = (cityId) => {
  return axios.get(`${apiHost}forecast/daily`, {
    params: {
      id: cityId,
      appid: apiKey,
    }
  })
    .then((response) => response.data);
}
