export const getIcon = (icon = false) => icon ? `http://openweathermap.org/img/w/${icon}.png` : '';

export const getTemperature = (temp = false) => temp ? (temp - 273).toFixed(1) : '';
