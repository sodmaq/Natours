const loctations = JSON.parse(
  document.getElementById('map').dataset.loctations
);
console.log(locations);

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';


var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});
