/**
 * Mapbox Map Script
 */

function setUpMap() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiamFuZXNzYXRyYW4iLCJhIjoiY2xvYTVycjF4MGcxNTJrbW40b2N2c2xhdyJ9.QJVQiLIxywTBeSQoUHdwlg";
  mapboxgl.setRTLTextPlugin(
    "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"
  );

  const map = new mapboxgl.Map({
    container: "map", // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/streets-v12",
    center: [-98, 40],
    zoom: 3, // starting zoom,
    attributionControl: false,
  });

  map.on("load", () => {
    map.resize();
    map.style.display = "initial";
    // map.setLayoutProperty("country-label", "text-field", [
    //   "format",
    //   ["get", "name_en"],
    //   { "font-scale": 1.2 },
    //   "\n",
    //   {},
    //   ["get", "name"],
    //   {
    //     "font-scale": 0.8,
    //     "text-font": [
    //       "literal",
    //       ["DIN Offc Pro Italic", "Arial Unicode MS Regular"],
    //     ],
    //   },
    // ]);
  });
  map.style.width = "500px";

  return map;
}

let parksData;
async function fetchParks(map) {
  const response = await fetch(
    "https://developer.nps.gov/api/v1/parks?limit=100000",
    {
      method: "GET",
      headers: {
        "X-Api-Key": "Y8Idz9Ba8lWUazAqUHNfxwE1RR97i3TSuoYiBsL7",
      },
    }
  );

  const jsonResponse = await response.json();
  parksData = jsonResponse.data;
  console.log(parksData);
  parksData.forEach((park) => {
    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(park.fullName);

    // create DOM element for the marker
    const el = document.createElement("div");
    el.id = "marker";

    // create the marker
    const marker = new mapboxgl.Marker(el)
      .setLngLat([park.longitude, park.latitude])
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);

    console.log(marker);
  });
}

const map = setUpMap();
fetchParks(map);
