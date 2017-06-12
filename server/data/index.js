const cities = require('./city.list.json');

export const getCities = (queryString) => {
  return cities
    .filter((city) => city.name.toLowerCase().match(queryString))
    .map((city) => ({
      label: `${city.name}, ${city.country}`,
      value: city.id,
    }));
}
