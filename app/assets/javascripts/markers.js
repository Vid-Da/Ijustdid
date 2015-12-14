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

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">You are here</h1>'+
    '<div id="bodyContent">'+
      '<p><b>Look around you to see what your neighbors are doing!</b></p>'+
      '<p>You must be logged to add your own achievements.</p>' + 
      '<p>You can also add a link to your video</p>' +
     '<img src="https://k44.kn3.net/taringa/3/6/5/7/8/2//saborami/ED0.jpg?8564" width="100px" height="100px" alt="no picture available">' +
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
    size: new google.maps.Size(15, 15),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
    animation: google.maps.Animation.DROP
  });
  console.log('creating extra marker');

 current_infowindow = new google.maps.InfoWindow({
    content: 'loading'
  });

  var achievement_text = '<div id="content">'+
    '<div id="siteNotice">'+
    '<h2 id="firstHeading" class="firstHeading">' + position.title + '</h2>'+
    '<div id="bodyContent">'+
    '<h3>' + position.category + '</b></h3>' + 
    '<p><b>' + position.description + '</b></p>'+
    '<p><img width=auto height="150px" src="' + position.link +'"></p>' +
    '<p>' + position.date +'</p>' +
  
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
