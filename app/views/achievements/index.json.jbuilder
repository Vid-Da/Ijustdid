json.array!(@achievements) do |achievement|
	json.extract! achievement, :title, :category, :description, :user_id
	json.latitude achievement.lonlat.x
	json.longitude achievement.lonlat.y
end