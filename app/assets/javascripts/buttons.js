$(document).on('ready', function(){
	
	$('#get-started').on("click",function () {
		console.log('removing the intro box');
		$('.jumbotron').hide(500);
		$('.col-lg-3').removeClass('hidden');
	});

	$('#categories').on("click",function () {
		console.log('adding categories');
		$('.categories-menu').toggleClass('hidden');
	});

	$('#create-achievement').on("click",function () {
		console.log('creating achievement');
		create_achievement();
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

});