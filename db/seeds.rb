# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

puts "Seeding...."

Shelter.create(address: "1253 S. Jackson Street", rating: 5, description: "Urban Rest Stops: Provide showers, laundry, restrooms, and other hygiene services along with housing, employment, and shelter resources.", 
name: "Low-Income Housing Institute")

Review.create(comment: "ew!", rating: 5)

puts "All done!"
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
