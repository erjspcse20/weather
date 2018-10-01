import axios from 'axios';//this is same as ajax request of jquery which is simplest form


const API_KEY='20afdc61ed28d7ca7aba1f529f229349';
const ROOT_URL=`https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}