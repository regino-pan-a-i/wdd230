const LAT = 33.1214924;
const LON = -117.3702033;
const KEY = "e3d0906143e3be27620395ff71af83f2";


let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${KEY}&units=imperial`;
let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${KEY}&units=imperial`;

const ONE_DAY = 24 * 60 * 60 * 1000

function getTemperature(temps){
    let temp = temps.main.temp;
    let tempText = temps.weather[0].description;
    let tempImgCode = temps.weather[0].icon;
    let tempHum = temps.main.humidity

    let temperature = document.getElementById("temperature");
    temperature.textContent = temp;
    let description = document.getElementById("tempText");
    description.textContent = tempText;
    let weatherImage = document.getElementById("tempImage");
    weatherImage.src = `https://openweathermap.org/img/wn/${tempImgCode}.png`;
    let humidity = document.getElementById('tempHum');
    humidity.textContent = `${tempHum}%`;
}



function getForecast(temps){
    let days = []
    let today = new Date();
    for (let i = 0; i < 3; i++){
        today = new Date(today.getTime() + ONE_DAY);
        let newDay = today.toISOString().slice(0, 10);
        days.push(newDay);
    }
    let temp = days.map(function(day){
        return temps.filter(function(temp) {
            return temp.dt_txt.startsWith(day);
        }).reduce(function (current, next){
            return (current.dt_txt.includes('09:00:00') ? current : next)
        })
    })
    createForcast(temp);
}

function createForcast(temp){
    let card = document.getElementById('weather');
    let div = document.createElement('div');
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day1 = new Date(temp[0].dt_txt).getDay();
    let day2 = new Date(temp[1].dt_txt).getDay();
    let day3 = new Date(temp[2].dt_txt).getDay();   
    
    let divHTML = `
        <h2>Three Day Forecast</h2>
        <section class="forecastWeather card">
            <section>
            <h3>${daysOfWeek[day1]}</h3>
            <img src="https://openweathermap.org/img/wn/${temp[0].weather[0].icon}.png" alt"${temp[0].weather[0].description}">
            <p>${temp[0].weather[0].description}</p>
            </section>
            <section>
            <h3>${daysOfWeek[day2]}</h3>
            <img src="https://openweathermap.org/img/wn/${temp[1].weather[0].icon}.png" alt"${temp[1].weather[0].description}">
            <p>${temp[1].weather[0].description}</p>
            </section>
            <section>
            <h3>${daysOfWeek[day3]}</h3>
            <img src="https://openweathermap.org/img/wn/${temp[2].weather[0].icon}.png" alt"${temp[2].weather[0].description}">
            <p>${temp[2].weather[0].description}</p>
            </section>
        </section>
            `;
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


function getOrderNumber(){
    let number = localStorage.getItem("orders")
    if (number != null){
        document.getElementById("orders").textContent = number;
    }else{
        document.getElementById("userOrders").textContent = 'Dont wait any more, get your drink now!'
    }
}

getOrderNumber();