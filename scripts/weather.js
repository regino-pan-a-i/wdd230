const LAT = 43.830105;
const LON = -111.8293825;
const KEY = "e3d0906143e3be27620395ff71af83f2";


let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${KEY}&units=imperial`;
let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${KEY}&units=imperial`;
// let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=43.830105&lon=-111.8293825&appid=e3d0906143e3be27620395ff71af83f2&units=imperial"

const ONE_DAY = 24 * 60 * 60 * 1000

function getTemperature(temps){
    let temp = temps.main.temp;
    let tempText = temps.weather[0].description;
    let tempImgCode = temps.weather[0].icon;
    let wind = temps.wind.speed;

    let temperature = document.getElementById("temperature");
    temperature.textContent = temp;
    let description = document.getElementById("tempText");
    description.textContent = tempText;
    temperature.textContent = temp;
    let weatherImage = document.getElementById("tempImage");
    weatherImage.src = `https://openweathermap.org/img/wn/${tempImgCode}.png`;
    let windSpeed = document.getElementById("windspeed");
    windSpeed.textContent = wind;
}



function getForecast(temps){
    let days = []
    let today = new Date();
    for (let i = 0; i < 3; i++){
        today = new Date(today.getTime() + ONE_DAY);
        let newDay = today.toISOString().slice(0, 10);
        days.push(newDay);
    }
    let high = days.map(function(day){
        return temps.filter(function(temp) {
            return temp.dt_txt.startsWith(day);
        }).reduce(function (current, next){
            return (current.main.temp > next.main.temp ? current : next)
        })
    })

    let low = days.map(function(day){
        return temps.filter(function(temp) {
            return temp.dt_txt.startsWith(day);
        }).reduce(function (current, next){
            return (current.main.temp < next.main.temp ? current : next)
        })
    })
    createForcast(high, low);
}

function createForcast(high, low){
    let card = document.getElementById('weather');
    let div = document.createElement('div');
    div.classList.add('forecastWeather');
    let divHTML = `
        <h2>Three Day Forecast</h2>
        <section>
        <h3>${high[0].dt_txt}</h3>
        <img src="https://openweathermap.org/img/wn/${high[0].weather[0].icon}.png">
        <p>${high[0].weather[0].description}</p>
        <p>High: ${high[0].main.temp}</p>
        <p>Low: ${low[0].main.temp}</p>
        </section>
        <section>
        <h3>${high[1].dt_txt}</h3>
        <img src="https://openweathermap.org/img/wn/${high[1].weather[0].icon}.png">
        <p>${high[1].weather[0].description}</p>
        <p>High: ${high[1].main.temp}</p>
        <p>Low: ${low[1].main.temp}</p>
        </section>
        <section>
        <h3>${high[2].dt_txt}</h3>
        <img src="https://openweathermap.org/img/wn/${high[2].weather[0].icon}.png">
        <p>${high[2].weather[0].description}</p>
        <p>High: ${high[2].main.temp}</p>
        <p>Low: ${low[2].main.temp}</p>
        </section>`;
    div.innerHTML = divHTML;
    card.appendChild(div);
}

async function fetchCurrent(){
    const response = await fetch(weatherURL);
    if (response.ok){
        const data = await response.json();
        getTemperature(data);
    }
}

async function fetchForecast(){
    const response = await fetch(forecastURL);
    if (response.ok){
        const data = await response.json();
        getForecast(data.list);
    } 
}

fetchCurrent()
fetchForecast()