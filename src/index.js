const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')

mapboxgl.accessToken = "pk.eyJ1IjoiYWRldmFuczk5IiwiYSI6ImNqa2szdW8zMjBoYzIzd3A4b2g1Nm5xdWMifQ.3O8hyRAGcM8MunFaaSZXIQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const newMarker = buildMarker('activity', [-74.009151, 40.705086]).addTo(map);
console.log(newMarker)

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// const marker1 = new mapboxgl.Marker(markerDomEl).setLngLat([-74.02, 40.715]).addTo(map);