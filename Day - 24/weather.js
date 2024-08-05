function getWeather() {
    const apiKey = "706bef995afa6b098686b12cf9f39bdd"; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');
    const errorDiv = document.getElementById('error');

    // Clear previous results and errors
    weatherInfo.innerHTML = '';
    errorDiv.innerHTML = '';

    if (city === '') {
        errorDiv.innerHTML = 'Please enter a city name.';
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.code === '404') {
                errorDiv.innerHTML = 'City not found. Please check the city name.';
            } else {
                weatherInfo.innerHTML = `
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            }
        })
        .catch(error => {
            errorDiv.innerHTML = 'Error fetching weather data. Please try again later.';
            console.log('Error:', error);
        });
}
