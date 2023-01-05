import { getWeather } from "./weather";

getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
  (result) => {
    console.log(result.data);
  }
);
