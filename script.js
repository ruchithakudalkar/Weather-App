const apiKey = "ae9b114e0521c185730049fec203267b";







document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("locationInput");
    const searchButton = document.getElementById("searchButton");
    const locationName = document.getElementById("locationName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const weatherIcon = document.getElementById("weatherIcon");

    searchButton.addEventListener("click", function () {
        const location = locationInput.value;
        fetchWeatherData(location);
    });

    function fetchWeatherData(location) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                locationName.textContent = data.name;
                temperature.textContent = `${(data.main.temp - 273.15).toFixed(1)}°C`;
                description.textContent = data.weather[0].description;
                weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            })
            .catch(error => {
                console.error("Error fetching weather data: ", error);
            });
    }
});
