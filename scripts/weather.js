const LAT = 43.830105;
const LON = -111.8293825;
const KEY = "e3d0906143e3be27620395ff71af83f2";


let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${KEY}&units=imperial`;
let forecastURL = `api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${KEY}&units=imperial`;

const ONE_DAY = 24 * 60 * 60 * 1000

function getTemperature(temps){
    console.log(temps);
    let temp = temps.main.temp;
    let tempText = temps.weather[0].description;
    let tempImgCode = temps.weather[0].icon

    const temperature = document.getElementById("temperature");
    temperature.textContent = temp;
    const description = document.getElementById("tempText");
    description.textContent = tempText;
    temperature.textContent = temp;
    const weatherImage = document.getElementById("tempImage");
    weatherImage.src = `https://openweathermap.org/img/wn/${tempImgCode}.png`;
}



function getForecast(temps){

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

    }
}

fetchCurrent()