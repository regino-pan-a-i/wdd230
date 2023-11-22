function showWindChill(temp, speed){
    const windChillSpan = document.getElementById("windchill");

    let message = "N/A";

    if (temp <= 50 && speed > 3){

        let chillFactor = Math.pow(speed, 0.16);
        let chill = Math.round(35.74 + (0.6215 * temp) - (35.75 * chillFactor) + (0.4275 * temp * chillFactor));
        message = `${chill}`;
    }
    


    windChillSpan.textContent = "Wind Chill " + message;
}

function getElements(){
    const temperatureSpan = document.getElementById("temperature");
    const windspeedSpan = document.getElementById("windspeed");
    const tepmerature = parseInt(temperatureSpan.textContent);
    const windspeed = parseInt(windspeedSpan.textContent);
    showWindChill(tepmerature, windspeed);
}

setTimeout(getElements(),100);
