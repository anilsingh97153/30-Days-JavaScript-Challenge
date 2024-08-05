function getWeather() {
    const apiKey = "your_openweather_api_key_here"; // Replace with your OpenWeatherMap API key
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

     // Fetch current weather
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
     .then(response => response.json())
     .then(data => {
         if (data.cod === '404') {
             errorDiv.innerHTML = 'City not found. Please check the city name.';
         } else {
             weatherInfo.innerHTML = `
                 <p>Temperature: ${data.main.temp}°C</p>
                 <p>Weather: ${data.weather[0].description}</p>
                 <p>Humidity: ${data.main.humidity}%</p>
                 <p>Wind Speed: ${data.wind.speed} m/s</p>
             `;

             // Fetch 5-day forecast
             fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
                 .then(response => response.json())
                 .then(forecastData => {
                     const dailyForecasts = getDailyForecasts(forecastData);
                     displayForecast(dailyForecasts);
                 })
                 .catch(error => {
                     errorDiv.innerHTML = 'Error fetching 5-day forecast data. Please try again later.';
                     console.log('Error:', error);
                 });
         }
     })
     .catch(error => {
         errorDiv.innerHTML = 'Error fetching weather data. Please try again later.';
         console.log('Error:', error);
     });
}

function getDailyForecasts(forecastData) {
 const dailyForecasts = [];
 const days = new Set();

 // Iterate through forecast data, select one forecast per day (e.g., at noon)
 for (let forecast of forecastData.list) {
     const date = new Date(forecast.dt_txt);
     const day = date.toLocaleDateString();

     if (!days.has(day)) {
         days.add(day);
         dailyForecasts.push({
             date: day,
             temp: forecast.main.temp,
             description: forecast.weather[0].description
         });
     }

     if (dailyForecasts.length === 5) break;
 }

 return dailyForecasts;
}

function displayForecast(dailyForecasts) {
 const forecastDiv = document.getElementById('forecast');

 dailyForecasts.forEach(dayForecast => {
     const forecastHTML = `
         <div class="forecast-day">
             <p><strong>${dayForecast.date}</strong></p>
             <p>${dayForecast.temp}°C</p>
             <p>${dayForecast.description}</p>
         </div>
     `;
     forecastDiv.innerHTML += forecastHTML;
 });
}