import {searchCity} from "./search_city";
import {searchForSuggestion} from "./suggestions"
import {search_bar, description} from "./search_city_vue"


$('#app').append(` <header class="h-32 w-screen bg-purple-600 bg-opacity-25  flex flex-col justify-center items-center">
                        <h1 class="text-3xl font-medium">Bienvenue sur Trouver votre Destination!</h1>
                        <span>Et partez en toute tranquilité :D</span>
                      </header>
                      <main id="main">
                      </main>`);

$('#main').append(
  search_bar
)



// FUNCTION TO SEARCH CITY AND ADD SUGGESTION
$("#input-search").change(function() {
  const city = this.value;

  searchCity(city, map);
  $("#suggest").append(`<section id="suggestions" class="flex flex-row h-16 items-center justify-center mb-5"></section>`)
  searchForSuggestion(city);
});



$("#main").append(`<section>
<div id="mapid"></div>
</section>`)

const map = L.map('mapid').setView([46.71109, 1.7191036], 1);

// MAP CONTROL
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleGlzY29zZW50aW5vIiwiYSI6ImNrczVxMHp6MjA0MHUybm9jcmo3bm9nbHMifQ.xwQWBMudrHk_Z_YPgmIocg'
}).addTo(map);


// ADD DESCRIPTON OF WEATHER
$("#main").append(
  description
)





