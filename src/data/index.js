import axios from 'axios';

const host = 'http://localhost:9500';

export const getCities = (input) => {
  return axios.get(`${host}/cities`, {
    params: {
      q: input,
    }
  });
}
