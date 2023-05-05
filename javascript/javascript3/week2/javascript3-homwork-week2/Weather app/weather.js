const apiKey = "20b6299ed3c5c862ff3d4ecfecf7212d";
const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");
const resultContainer = document.getElementById("result-container");

function searchWeather() {
  const city = searchBox.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const cityName = data.name;
      const temperature = Math.round(data.main.temp - 273.15) + "°C";
      const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const windSpeed = data.wind.speed + "m/s";
      const cloudiness = data.weather[0].description;
      const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      resultContainer.innerHTML = `
        <img src="${iconUrl}" alt="${cloudiness}" />
        <h2>${cityName}</h2>
        <p>Temperature:${temperature}<br />
        Wind speed: ${windSpeed}<br />
        Cloudiness: ${cloudiness}<br />
        Sunrise: ${sunrise}<br />
        Sunset: ${sunset}
      `;
      resultContainer.style.display = "block";
    })

    .catch((error) => {
      console.log("Error: ", error);
      resultContainer.innerHTML = `<h2>Error: ${error.message}</h2>`;
      resultContainer.style.display = "block";
    });
}

searchBtn.addEventListener("click", searchWeather);
