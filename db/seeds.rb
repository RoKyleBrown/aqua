# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#16:9, 9:16

Movie.destroy_all


m1 = Movie.create(
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son . . .",
    imageUrl: "godfather.png",
    feature: true,
    top_feature: true,
    video: "TheGodfather.mp4"
)   
m2 = Movie.create(
    title: "Pulp Fiction",
    description: "Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles.",
    imageUrl: "pulp-fiction.png",
    feature: true,
    top_feature: false,
    video: "PulpFiction.mp4"
)   