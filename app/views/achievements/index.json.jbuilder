json.array!(@achievements) do |achievement|
	json.extract! achievement, :id, :title, :category, :description, :link, :date, :image, :user_id
	json.latitude achievement.lonlat.x
	json.longitude achievement.lonlat.y
	json.username achievement.user_name
end