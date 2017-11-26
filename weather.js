function displayResult(result) {
  // console.log(result);
  document.querySelector('#city > span').innerText = result.name;
  document.querySelector('#temperature > span').innerText = "Actuellement: " + Math.round(result.main.temp) + 'C°' + " - Min: " + result.main.temp_min + " C°" + " - Max: " + result.main.temp_max + " C°";
  document.querySelector("#temperature-details > span").innerText = "Pression: " + result.main.pressure + " pHa" + " - Humidité: " + result.main.humidity + " %.";
  document.querySelector('#description > span').innerText = result.weather[0].description.toUpperCase();
  document.querySelector("#wind > span").innerText = "Vitesse du vent: " + result.wind.speed + " km/hr";
  document.querySelector("#weather-icon").src = "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png";
}

navigator.geolocation.getCurrentPosition(success, error);

function success(pos) {
  // console.log(pos);

  window.fetch("http://api.openweathermap.org/data/2.5/weather?lat="+pos.coords.latitude+"&lon="+pos.coords.longitude+"&lang=fr&units=metric&appid=4d3796cbe39343750eedff5503a475c2")
    .then(res => res.json())
    .then(resJson => displayResult(resJson))
}

function error() {
  console.log("Please allow geolocalisation to display weather.");
}
