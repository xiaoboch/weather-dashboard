import axios from 'axios'

const API_KEY = 'fbfc9f3ca76d6454bf7b005937351a84';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  console.log('request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
