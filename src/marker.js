const mapboxgl = require("mapbox-gl");

const createNewMarker = (markerType, lngLat = [-74.02, 40.715], height = "39px", width = "32px") => {
    let backgroundImage;
    if (markerType === 'activity') {
         backgroundImage = 'http://i.imgur.com/WbMOfMl.png'
    } else if (markerType === 'hotel') {
        backgroundImage = 'http://i.imgur.com/D9574Cu.png'
    } else if (markerType === 'retaurant') {
        backgroundImage = 'http://i.imgur.com/cqR6pUI.png'
    } else {
        backgroundImage = 'http://i.imgur.com/WbMOfMl.png'
    }

    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = width;
    markerDomEl.style.height = height;
    markerDomEl.style.backgroundImage = `url(${backgroundImage})`;

    return new mapboxgl.Marker(markerDomEl).setLngLat(lngLat)

};

module.exports = createNewMarker