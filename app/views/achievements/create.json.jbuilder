json.extract! @achievement, :id, :title, :category, :description, :user_id, :link, :date, :image
json.latitude @achievement.lonlat.x
json.longitude @achievement.lonlat.y
