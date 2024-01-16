const search = document.querySelector('.bx-search');
const input = document.querySelector('.search input');
const DivIcon = document.querySelector('.weather-icon');
const icon = document.querySelector('.weather-icon i');
const message = document.querySelector('#msg');
let city;

// added a click event listener
search.addEventListener('click', () => {
    city = input.value;
    weather(city);
});

// It will get the data from the API if the response is ok otherwise will throw an error
async function weather(city) {
    // Clear the error message when making a new request
    message.textContent = '';

    try {
        const apiKey = '107e9ea76e4810e528542eb72b27f7a7';
        const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
        const finalURL = apiURL + `&q=${city}&appid=${apiKey}`;
        const request = new Request(finalURL);
        const response = await fetch(request);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parsing the API response into JSON format
        const WeatherObjText = await response.text();
        const WeatherObj = JSON.parse(WeatherObjText);

        console.log(WeatherObj);

        // Call the functions inside the try block
        weatherChanger(WeatherObj);
        iconChanger(WeatherObj);
    } catch (error) {
        // Handle the error, and display a message
        message.textContent = 'An error happened. Please try again.';
        
    }
}

// weather();

const temp = document.querySelector('.temp');
const loc = document.querySelector('.state');
const Humidity = document.querySelector('.current-condition');
const windSpeed = document.querySelector('.wind-speed');

// Changes the temperature, place, humidity, wind speed
function weatherChanger(obj) {
    obj.main.temp = Math.round(obj.main.temp);
    temp.innerHTML = `<h2>${obj.main.temp}°C</h2>`;
    loc.innerHTML = `<h2>${obj.name}</h2>`;
    Humidity.innerHTML = `<i class="bx bx-water"></i><div class="more-info Humdity">${obj.main.humidity}% Humidity</div>`;
    windSpeed.innerHTML = `<i class="bx bx-wind"></i><div class="more-info wind">${obj.wind.speed} km/h Wind Speed</div>`;
}

// Changes the icon
const iconChanger = (obj) => {
    const newIcon = obj.weather[0].icon;
    DivIcon.innerHTML = `<img id="img" src="https://openweathermap.org/img/wn/${newIcon}.png" />`;
    DivIcon.classList.add('visible');
};
