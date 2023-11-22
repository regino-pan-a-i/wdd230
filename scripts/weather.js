const LAT = 43.830105;
const LON = -111.8293825;
const KEY = "e3d0906143e3be27620395ff71af83f2";


let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${KEY}&units=imperial`;
let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${KEY}&units=imperial`;
// let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=43.830105&lon=-111.8293825&appid=e3d0906143e3be27620395ff71af83f2&units=imperial"

const ONE_DAY = 24 * 60 * 60 * 1000

function getTemperature(temps){
    console.log(temps);
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



function getForecast(temps, timeStamp){
    console.log(temps);
    let day = new Date(timeStamp);

    let high = temps.filter(function(temp) {
        return (temp.dt_txt < day.getTime() ? true : false )
    }).reduce(function (current, next){
        return (next.main.temp > current.main.temp ? next : current)
    })
    console.log(`High ${high}`)
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
        let today = new Date()
        getForecast(data.list, today.getTime() + ONE_DAY)
        getForecast(data.list, today.getTime() + ONE_DAY + ONE_DAY)
        getForecast(data.list, today.getTime() + ONE_DAY + ONE_DAY + ONE_DAY)
    } else{
        console.log("WHAT IS HAPPENING???")
    }
}

fetchCurrent()
fetchForecast()