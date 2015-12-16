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
    '<h2 id="welcome-firstHeading" class="firstHeading">You are here</h2>'+
    '<div id="welcome-bodyContent">'+
    '<h4>Look around you to see what your neighbors are doing</h4>'+
    '<p>You must be logged to add your own achievements.</p>' + 
    '<p>You can also add a links and images</p>' +
    '<img src="http://www.scrapsyard.com/wp-content/uploads/2015/05/Welcome-Simple-Greeting-Image-520x431.jpg" height:"150px" width="300px">' +
    '</div>'+
    '</div>';

  var InfoWindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400
  });
};

function imgError(image) {
  image.onerror = "";
  image.src = "/logo.jpg";
  return true;
};

function createAllMarkers (achievement) {
  var LatLng = new google.maps.LatLng(achievement.latitude, achievement.longitude);

  var marker = new google.maps.Marker({
    position: LatLng,
    map: map,
    icon: icons[achievement.category].icon,
    animation: google.maps.Animation.DROP
  });
  console.log('creating extra marker');

  current_infowindow = new google.maps.InfoWindow({
    content: 'loading',
    maxWidth: 400
  });

  var achievement_text = '<div id="markerContent">'+
  '<div id="marker">'+
  '<h2 id="marker-firstHeading" class="firstHeading"><a href="/api/achievements/' + achievement.id +'">' + achievement.title + '</a></h2>'+
  '<div id="marker-bodyContent">'+
  '<h4>' + achievement.description + '</h4>'+
  '<p>More info:<a href="' + achievement.link + '">' + achievement.link + '</a></p>'+
  '<p>User:<a href="/users/' + achievement.user_id +'">' + achievement.username + '</a></p>'+
  '<img width=auto height="150px" src="' + achievement.image + '" onerror="imgError(this);">' + 
  '<h4><b>Category: ' + achievement.category + '</b>   |   ' + achievement.date +'</h4>' +
  '</div>'+
  '</div>';

  marker.addListener('mouseover', function() {
    current_infowindow.setContent(achievement_text);
    current_infowindow.open(map, marker);
  });

  achievements[achievement.category] = achievements[achievement.category] || [];
  achievements[achievement.category].push(marker)
};
//<%= link_to(concert.band, achievements/:id_path(achievements)) %>