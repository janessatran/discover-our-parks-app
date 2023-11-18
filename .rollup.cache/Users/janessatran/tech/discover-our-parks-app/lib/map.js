/**
 * Mapbox Map Script
 */
// TOOD: should this not be exposed globally? Makes it easier to debug.
function setUpMap() {
    const style = "mapbox://styles/mapbox/outdoors-v12";
    mapboxgl.accessToken =
        "pk.eyJ1IjoiamFuZXNzYXRyYW4iLCJhIjoiY2xvYTVycjF4MGcxNTJrbW40b2N2c2xhdyJ9.QJVQiLIxywTBeSQoUHdwlg";
    const map = new mapboxgl.Map({
        container: "map",
        center: [-98, 40],
        zoom: 2,
        style: style,
        attributionControl: false,
    });
    map.resize();
    map.on("load", () => {
        map.resize();
        // Custom atmosphere styling
        map.setFog({
            color: "rgb(242, 208, 208)", // Pink fog / lower atmosphere
            "high-color": "rgb(186, 221, 222)", // Blue sky / upper atmosphere
            "horizon-blend": 0.4, // Exaggerate atmosphere (default is .1)
        });
        map.addSource("mapbox-dem", {
            type: "raster-dem",
            url: "mapbox://mapbox.terrain-rgb",
        });
        map.setTerrain({
            source: "mapbox-dem",
            exaggeration: 1.5,
        });
    });
    return map;
}
// TODO: This doesn't add the marker to the correct place at the moment.
function addPopupToMap(map, parkData) {
    // const popup = new mapboxgl.Popup({ offset: 1 }).setText(
    //   parkData.fullName + parkData.latitude + parkData.longitude
    // );
    new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat([parkData.longitude, parkData.latitude])
        .setHTML(`<h3>${parkData.fullName}</h3><p>${parkData.state}</p>`)
        .addTo(map);
    // create DOM element for the marker
    // const el = document.createElement("div");
    // el.className = "park-marker";
    // el.id = parkData.parkCode + "-marker";
    // create the marker
    // new mapboxgl.Marker(el)
    //   .setLngLat([parkData.longitude, parkData.latitude])
    //   .setPopup(popup) // sets a popup on this marker
    //   .addTo(map);
}
function flyTo(map, park) {
    const end = {
        center: [park.longitude, park.latitude],
        zoom: 12.5,
        bearing: 130,
        pitch: 100,
    };
    map.flyTo({
        ...end, // Fly to the selected target
        duration: 500, // Animate over 12 seconds
        essential: true, // This animation is considered essential with
        //respect to prefers-reduced-motion
    });
    // TODO: is flying with the pitch annoying?
    // map.flyTo({
    //   center: [park.longitude, park.latitude],
    //   essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    // });
}
export { setUpMap, addPopupToMap, flyTo };
//# sourceMappingURL=map.js.map