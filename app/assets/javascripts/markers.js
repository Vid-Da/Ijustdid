// Markers-----------------
var current_infowindow;

var icons = {
  Technology : {
    icon: 'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png',
  },
  Family : {
    icon: 'http://maps.google.com/mapfiles/kml/paddle/pink-blank.png',
  },
  Business : {
    icon: 'http://maps.google.com/mapfiles/kml/paddle/purple-blank.png',
  },
   Art : {
    icon: 'http://maps.google.com/mapfiles/kml/paddle/ylw-blank.png',
  },
   Entrepreneurship : {
    icon: 'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png',
  },
   Studies : {
    icon: 'http://maps.google.com/mapfiles/kml/paddle/grn-blank.png',
  },
   Coding : {
    icon: 'http://maps.google.com/mapfiles/kml/paddle/ltblu-blank.png',
  },
   Sports : {
    icon: 'http://maps.google.com/mapfiles/kml/paddle/orange-blank.png',
  },
};

function createMarker (position) {
  var marker = new google.maps.Marker({
  	position: position,
  	map: map,
    animation: google.maps.Animation.DROP,
    title: 'your position'
  });

  marker.addListener('mouseover', function() {
    InfoWindow.open(map, marker);
  });

   marker.addListener('mouseout', function() {
    InfoWindow.close(map, marker);
  });

  var contentString = '<div id="welcomeContent">'+
    '<div id="welcome">'+
    '</div>'+
    '<h1 id="welcome-firstHeading" class="firstHeading">You are here</h1>'+
    '<div id="welcome-bodyContent">'+
    '<p><b>Look around you to see what your neighbors are doing!</b></p>'+
    '<p>You must be logged to add your own achievements.</p>' + 
    '<p>You can also add a link to your video</p>' +
    '<img src="http://www.scrapsyard.com/wp-content/uploads/2015/05/Welcome-Simple-Greeting-Image-520x431.jpg" height:"150px" width="300px" alt="no picture available">' +
    '</div>'+
    '</div>';

  var InfoWindow = new google.maps.InfoWindow({
    content: contentString
  });

};

function createAllMarkers (position) {
  var LatLng = new google.maps.LatLng(position.latitude, position.longitude);

  var marker = new google.maps.Marker({
    position: LatLng,
    map: map,
    icon: icons[position.category].icon,
    animation: google.maps.Animation.DROP
  });
  console.log('creating extra marker');

  current_infowindow = new google.maps.InfoWindow({
    content: 'loading',
    maxWidth: 400
  });

  var achievement_text = '<div id="markerContent">'+
    '<div id="marker">'+
    '<h2 id="marker-firstHeading" class="firstHeading">' + position.title + '</h2>'+
    '<div id="marker-bodyContent">'+
    '<h4>' + position.description + '</h4>'+
    '<p>More info:<a href="' + position.link + '">' + position.link + '</a></p>'+
    '<p>User: ' + position.username + '</p>'+
    '<p><img width=auto height="150px" src="' + position.image +'"></p>' +
    '<h4><b>' + position.category + '</b>   |   ' + position.date +'</h4>' +
  
    //'<p> Created by:' + <%= position.user.name %> + '</p>' +
    '</div>'+
    '</div>';

  marker.addListener('mouseover', function() {
    current_infowindow.setContent(achievement_text);
    current_infowindow.open(map, marker);
  });

  achievements[position.category] = achievements[position.category] || [];
  achievements[position.category].push(marker)

};
