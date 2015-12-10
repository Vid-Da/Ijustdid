# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

david = User.create(name: 'david', email: 'david@david.com', password: '12345678', password_confirmation: '12345678')

achievement1 = Achievement.create(title: 'title1', description: 'Test1', category: 'technology', user_id: 1, lonlat: 'POINT(40.4167761 -3.7037902)');
achievement2 = Achievement.create(title: 'title2', description: 'Test2', category: 'technology', user_id: 1, lonlat: 'POINT(40.4167742 -3.7037903)');
achievement3 = Achievement.create(title: 'title3', description: 'Test3', category: 'technology', user_id: 1, lonlat: 'POINT(40.4167763 -3.7037904)');
achievement4 = Achievement.create(title: 'title4', description: 'Test4', category: 'technology', user_id: 1, lonlat: 'POINT(40.4167734 -3.7037905)');
