// Creating map object
var map = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
  });
  
  // Adding tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(map);
  
  // If data.beta.nyc is down comment out this link
  var link = "../LAMS-Project/Linxi/app_data_geo.json";
 
  // Grabbing our GeoJSON data..
  d3.json(link, function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(map);
  });
  