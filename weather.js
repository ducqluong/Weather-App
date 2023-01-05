import axios from "axios";

export function getWeather(latitude, longitude, timezone) {
  return axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=America%2FChicago",
    {
      params: {
        latitude: latitude,
        longitude: longitude,
        timezone,
      },
    }
  );
}
