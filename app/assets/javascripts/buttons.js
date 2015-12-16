$(document).on('ready', function(){
	
	//remove starting jumbotron

	$('#get-started').on("click",function () {
		$('.jumbotron').hide(500);
		$('.col-lg-3').removeClass('hidden');
	});

	// categories menu

	$('#categories').on("click",function () {
		console.log('adding categories');
		$('.categories-menu').toggleClass('hidden');
	});

	$('.categories-menu').on('click', 'input', function(event){
		var button = achievements[$(this).data('hook')];
		if (typeof button !== "undefined") {
			button.forEach(function(marker) {
			if (marker.getMap() === null) {
				marker.setMap(map);
			}
			else {
				marker.setMap(null);
			}
			})
		}
		else {
			console.log('no achievements available for this category');
		}
	});

	// create new achievement

	$('#submit').on('click', function(event) {
		event.preventDefault();

		var title = $('#title').val();
		var description = $('#text-description').val();
		var latitude = $('#new-location').data("latitude");
		var longitude = $('#new-location').data("longitude");
		var location = 'POINT('+ latitude + ' ' + longitude + ')';
		var link = $('#link').val();
		var date = $('#date').val();
		var category = $('#category').val();

		var data_new_achievement = {title: title, description: description, lonlat: location, link: link, date: date, category: category};
		create_achievement(data_new_achievement);

	});

});