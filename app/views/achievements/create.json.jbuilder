	json.extract! achievement, :title, :category, :description, :user_id, :link, :date
	json.latitude achievement.geometry.location.latitude
	json.longitude achievement.geometry.location.longitude
