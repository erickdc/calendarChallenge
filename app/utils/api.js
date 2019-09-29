const apiUrl = 'http://api.openweathermap.org/data/2.5/';

export const requestApi = url =>
  fetch(apiUrl + url).then(response => response.json());
