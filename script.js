import {searchCity} from "./search_city";
import {searchForSuggestion} from "./suggestions"

// VARIABLES


const map = L.map('mapid').setView([46.71109, 1.7191036], 1);


$("#input-search").change(function() {
  const city = this.value;
  
  searchCity(city, map);
  searchForSuggestion(city);
});


// MAP CONTROL

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleGlzY29zZW50aW5vIiwiYSI6ImNrczVxMHp6MjA0MHUybm9jcmo3bm9nbHMifQ.xwQWBMudrHk_Z_YPgmIocg'
}).addTo(map);