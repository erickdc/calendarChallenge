const apiUrl = 'http://api.openweathermap.org/data/2.5/';
const key = '06a4c6f153fa57c2354ab709f010f8fb';

export const requestApi = (url)  => {
    return fetch(apiUrl + url)
    .then(response => response.json());
};