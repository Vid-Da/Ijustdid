// Markers-----------------

var icons = {
  Family : {
    icon: 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Science-Test-Tube-icon.png'
  },
   Technology : {
    icon: 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Science-Test-Tube-icon.png'
  },
   Business : {
    icon: 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Science-Test-Tube-icon.png'
  },
   Art : {
    icon: 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Science-Test-Tube-icon.png'
  },
   Entrepreneurship : {
    icon: 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Science-Test-Tube-icon.png'
  },
   Studies : {
    icon: 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Science-Test-Tube-icon.png'
  },
   Coding : {
    icon: 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Science-Test-Tube-icon.png'
  },
   Sports : {
    icon: 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Science-Test-Tube-icon.png'
  },
};

function createMarker (position) {
  var marker = new google.maps.Marker({
  	position: position,
  	map: map,
    icon: 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Science-Test-Tube-icon.png',
    animation: google.maps.Animation.DROP,
    title: 'your position'
  });
  marker.addListener('mouseover', function() {
    InfoWindow.open(map, marker);
  });

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">You are here</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Look around you to see what your neighbors are doing!</b></p>'+
    '<p>Link: You must be logged to add your own achievements.</p>' + 
    '<p>You can also add a link to your video</p>'
    '</div>'+
    '</div>';

  var InfoWindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('mouseout', function() {
    InfoWindow.close(map, marker);
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

  marker.addListener('mousemove', function() {
    InfoWindow.open(map, marker);
  });

  var achievement_text = '<div id="content">'+
    '<div id="siteNotice">'+
    '<h2 id="firstHeading" class="firstHeading">' + position.title + '</h2>'+
    '<div id="bodyContent">'+
    '<h3>' + position.category + '</b></h3>' + 
    '<p><b>' + position.description + '</b></p>'+
    '<p>' + position.link +'</p>'

    //'<p> Created by:' + <%= position.user.name %> + '</p>' +
    '</div>'+
    '</div>';

  var InfoWindow = new google.maps.InfoWindow({
    content: achievement_text
  });

  achievements[position.category] = achievements[position.category] || [];
  achievements[position.category].push(marker)

  marker.addListener('mouseout', function() {
    InfoWindow.close(map, marker);
  });

};