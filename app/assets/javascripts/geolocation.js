var map;

$(document).on('ready', function() {
  if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(onLocation, onError);
  }
});

function onLocation(position){
  var centerMadrid = {
    lat: 40.4167754,
    lng: -3.7037902
  };
  var myPosition = centerMadrid;

  if (position) {
    var myPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
  }
  console.log(myPosition)

  createMap(myPosition);
  setupAutocomplete();
} 

function onError(error){
  console.log("What are you using, IE 7??" + error);
}

function createMap(myPosition){
  map = new google.maps.Map($('#map')[0], {
  	center: myPosition,
    zoom: 16
  });

  createMarker(myPosition);

  $.ajax({
    url : '/api/achievements',
    dataType : "json",
    success : function(response) {
      console.log(response)
      response.forEach(function(position){
        console.log(position.lonlat);
        createAllMarkers(position.lonlat);
      })
    },
    fail: function(error){
      console.error("Error running the ajax script: " + error);
    }
  });
}

// Markers-----------------

function createMarker (position) {
  var marker = new google.maps.Marker({
  	position: position,
  	map: map,
    title: 'your position'
  });
  marker.addListener('click', function() {
    InfoWindow.open(map, marker);
  });

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">You are here</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Look around you to see what are your neighbors doing!</b>'+
    '<p>Link: You must be logged to add your own achievements.</p>' + 
    '<p>You can also add a link to your video</p>'
    '</div>'+
    '</div>';

  var InfoWindow = new google.maps.InfoWindow({
    content: contentString
  });
};

function createAllMarkers (lonlat) {
  var coordinates = lonlat.replace(/[^\d.-]/g, '');
  var clear = [coordinates.slice(0, 10), " ", coordinates.slice(10)].join('').split(" ");

  var myLatLng = new google.maps.LatLng(parseFloat(clear[0]),parseFloat(clear[1]));

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
  console.log('creating extra marker');

  marker.addListener('click', function() {
    InfoWindow.open(map, marker);
  });

  var achievement_text = '<p>You can also add a link to your video</p>';
  
  var InfoWindow = new google.maps.InfoWindow({
    content: achievement_text
  });
};

// Autocomplete --------------

function setupAutocomplete(){
  var input = $('#get-places')[0];
  var autocomplete = new google.maps.places.Autocomplete(input);
  
  autocomplete.addListener('place_changed', function(){
    var place = autocomplete.getPlace();
    if (place.geometry.location) {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }else{
      alert("The place has no location..?")
    }
    createMarker(place.geometry.location);
    console.log(place);
  });
}

function create_achievement(){

}