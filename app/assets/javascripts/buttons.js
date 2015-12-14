$(document).on('ready', function(){
	
	//remove starting jumbotron

	$('#get-started').on("click",function () {
		console.log('removing the intro box');
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
		alert("trying to create new achievement");
		var title = $('#title').val();
		var description = $('#text-description').val();
		var lonlat = $('#new-location').val();
		var link = $('#link').val();
		var date = $('#link').val();
		var category = $('#category').val();

		var data_new_achievement = {title: title, description: description, location: lonlat, link: link, date: date, category: category};
		create_achievement(data_new_achievement);		
	});

});