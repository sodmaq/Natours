const locations = JSON.parse(
  document.getElementById('map').dataset.locations
);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiZHJpZnR5Y3liZXIiLCJhIjoiY2xvdDRlZnZ6MDdnZDJpcWU0cXMxMm1wNyJ9.KDiiIKXTKoEpQJIhBaf0GQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
});
