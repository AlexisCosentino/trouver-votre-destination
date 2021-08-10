const apiKey = "f7def7301ab600d6be693a348978f467";

export function searchCity(city, map) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        if(data.cod != 404) {
          const {
            coord: {
              lon,
              lat
            },
            name,
            weather,
            main: {
              feels_like,
              humidity,
              pressure,
              temp,
              temp_max,
              temp_min
            }
          } = data;
          map.setView([lat, lon], 10);
          $('#titleWeather').html(`La météo sur ${name}`);
          $('#descriptionWeather').html(weather.map(o => o.description).toString());
          $('#temperature').html(`${temp}°C`);
          $('#temperatureFeel').html(`${feels_like}°C`);
          $('#humidity').html(`${humidity}%`);
          $('#pressure').html(`${pressure}Pa`);
          $('#tempMax').html(`${temp_max}°C`);
          $('#tempMin').html(`${temp_min}°C`);
        }
      })
      .catch(error => console.log(error));
  }