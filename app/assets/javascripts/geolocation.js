var map;

$(document).on('ready', function() {
  if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(onLocation, onError);
  }

  function onLocation(position){
    var myPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    console.log(myPosition)

    createMap(myPosition);
    setupAutocomplete();
  } 

  function onError(err){
    console.log("What are you using, IE 7??", err);
  }

  function createMap(position){
    map = new google.maps.Map($('#map')[0], {
    	center: position,
      zoom: 16
    });

   createMarker(position);
  }


// Markers-----------------

  function createMarker (position) {
    var marker = new google.maps.Marker({
    	position: position,
    	map: map
    });

     var address = markerInfo.formattedAddress;
   		marker.addListener('click', function(){
      getInfoWindow(address).open(map, marker);
    });
  }
});

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

  function getInfoWindow(address){
    return new google.maps.InfoWindow({
      content: address
    });
  }




