# encoding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

david = User.create(name: 'david', email: 'david@david.com', password: '12345678', password_confirmation: '12345678')

achievement1 = Achievement.create(title: 'Acabo de tener mi primer hijo!', description: 'Mi pareja y yo acabamos de tener nuestro primer hijo "Antonio"', category: 'Family', user_id: 1, lonlat: 'POINT(40.437885 -3.682304)');
achievement2 = Achievement.create(title: 'Escribi mi primer libro!', description: 'Mi primera novela será publicada en 2 meses por la editorial Miraguano. Mas info en el enlace:', category: 'Art', user_id: 1, lonlat: 'POINT(40.435885 -3.682604)');
achievement3 = Achievement.create(title: 'Termine mi doctorado', description: 'Tras 5 años acabo de terminar mi doctorado en fisica de particulas. Para mas info mirar el link', category: 'Studies', user_id: 1, lonlat: 'POINT(40.435285 -3.682904)');
achievement4 = Achievement.create(title: 'Termine mi primera app web', description: 'Gracias al Ironhack he conseguido crear mi primera aplicacion web: "I just did". Puedes ver el codigo en mi github:link', category: 'Coding', user_id: 1, lonlat: 'POINT(40.438212 -3.681483)');
achievement5 = Achievement.create(title: 'Aceptada en el MBA del IE', description: 'Despues de 2 años intentando entrar en el MBA por fin lo he conseguido!!', category: 'Studies', user_id: 1, lonlat: 'POINT(40.437785 -3.682504)');
