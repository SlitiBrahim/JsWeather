function displayResult(result) {
  console.log(result);
  document.querySelector('#city').innerText = result.name;
  document.querySelector('#temperature').innerText = "Actuellement: " + Math.round(result.main.temp) + 'C°' + " - Min: " + result.main.temp_min + " C°" + " - Max: " + result.main.temp_max + " C°";
  document.querySelector("#temperature-details").innerText = "Pression: " + result.main.pressure + " pHa" + " - Humidité: " + result.main.humidity + " %.";
  document.querySelector('#description').innerText = result.weather[0].description.toUpperCase();
  document.querySelector("#wind").innerText = "Vitesse du vent: " + result.wind.speed + " km/hr";
}

window.fetch("http://api.openweathermap.org/data/2.5/weather?q=Lyon&lang=fr&units=metric&appid=4d3796cbe39343750eedff5503a475c2")
  .then(res => res.json())
  .then(resJson => displayResult(resJson))
