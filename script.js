const cityName = document.querySelector(".city-name");
const weatherCondition = document.querySelector(".weather-condition");
const cityTemperature = document.querySelector(".city-temperature");
const highTemperature = document.querySelector(".high-temperature");
const lowTemperature = document.querySelector(".low-temperature");
const cityHumidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");

let units = "metric";

appKey = "8972daed41ba50569615252807d8fa39";

const weather = {
  apiKey: "8972daed41ba50569615252807d8fa39",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&units=${units}`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { main } = data.weather[0];
    const { temp, temp_min, temp_max, humidity } = data.main;
    const { speed } = data.wind;

    cityName.textContent = name;
    weatherCondition.textContent = main;
    cityTemperature.textContent = temp + " °C";
    lowTemperature.textContent = temp_min + " °C";
    highTemperature.textContent = temp_max + " °C";
    windSpeed.textContent = speed + " km/h";
    cityHumidity.textContent = humidity + " %";
  },
};

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  weather.fetchWeather(searchInput.value);
  searchInput.value = "";
});

weather.fetchWeather("Nashville");
