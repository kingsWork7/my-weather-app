// OpenWeatherMap API key and endpoint
const apiKey = "0b1537a1ae0806fb8d1f6565038e009f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// DOM elements
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather_icon');
const addCls = document.getElementById('addcls');

// Function to check weather using the OpenWeatherMap API
async function checkWeather(city) {
    // Fetch weather data for the specified city
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();

    // Update the displayed weather information
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' kmph';

    // Apply the proper color class to the weather card based on weather conditions
    removeWeatherClasses();
    switch (data.weather[0].main) {
        case 'Clouds':
            weatherIcon.src = 'images/clouds.png';
            addCls.classList.add('clouds');
            break;
        case 'Rain':
            weatherIcon.src = 'images/rain.png';
            addCls.classList.add('rain');
            break;
        case 'Mist':
            weatherIcon.src = 'images/mist.png';
            addCls.classList.add('mist');
            break;
        case 'Clear':
            weatherIcon.src = 'images/clear.png';
            addCls.classList.add('clear');
            break;
        case 'Drizzle':
            weatherIcon.src = 'images/drizzle.png';
            addCls.classList.add('drizzle');
            break;
        case 'Haze':
            weatherIcon.src = 'images/haze.png';
            addCls.classList.add('haze');
            break;
        default:
            break;
    }
}

// Function to remove weather-related color classes from the weather card
function removeWeatherClasses() {
    addCls.classList.remove('clouds', 'rain', 'mist', 'clear', 'drizzle', 'haze');
}

// Event listener for the search button to check weather based on user input
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});