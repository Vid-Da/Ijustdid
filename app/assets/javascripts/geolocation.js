var map;
var achievements ={};

function initMap(position){
  var centerMadrid = {lat: 40.4167754, lng: -3.7037902};

  createMap(centerMadrid);
  setupAutocomplete();

  if ("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(onLocation, onError);
  }
};


function onLocation(position){
  var userPosition = {lat: position.coords.latitude, lng: position.coords.longitude};
  map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude, 16));
  createMarker(userPosition);
};


function onError(error){
  console.log("What are you using, IE 7??" + error);
}


function createMap(Position){
  map = new google.maps.Map($('#map')[0], {
  	center: Position,
    zoom: 16
  });

  $.ajax({
    url : '/api/achievements',
    dataType : "json",
    success : function(response) {
      console.log(response)
      response.forEach(createAllMarkers);
    },

    fail: function(error){
      console.error("Error running the ajax script: " + error);
    }
  });
}

// Autocomplete --------------

function setupAutocomplete() {
  var input = $('#get-places')[0];
  var autocomplete = new google.maps.places.Autocomplete(input);
  
  var input_new = $('#new-location')[0];
  if (typeof input_new !=='undefined') {
    var autocomplete = new google.maps.places.Autocomplete(input_new);
  };
  
  autocomplete.addListener('place_changed', function(){
    var place = autocomplete.getPlace();
    if (place.geometry.location) {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }else{
      alert("The place has no location..?")
    }

    console.log(place);
  });
}

// Create achievement ----------

function create_achievement(data_new_achievement) {

  $.ajax({
    type : 'POST',
    url : '/api/achievements',
    dataType : "json",
    beforeSend: function(xhr, settings) {
      xhr.setRequestHeader("Accept", "application/json");
      var token=$('meta[name="csrf-token"]').attr('content');
      xhr.setRequestHeader('X-CSRF-Token',token );
      settings['dataType'] = "json";
      settings['contentType'] = "application/json";
    },
    data : {achievement: data_new_achievement},
    success : function(data) {
      console.log(data);
      console.log(data.geometry.latitude);
      console.log(data.geometry.longitude);
      createAllMarkers(place.geometry.location);
    },
    fail: function(error){
      console.error("Error running the ajax script: " + error);
    }
  });
};
