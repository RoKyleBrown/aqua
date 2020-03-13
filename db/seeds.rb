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
m3 = Movie.create(
    title: "Ex Machina",
    description: "Ex Machina is a 2014 science fiction film written and directed by Alex Garland. Domhnall Gleeson, Alicia Vikander, and Oscar Isaac star in a story that follows a programmer who is invited by his CEO to administer the Turing test to an intelligent humanoid robot.",
    imageUrl: "ExMachina.png",
    feature: true,
    top_feature: false,
    video: "ExMachina.mp4"
)   


m4 = Movie.create(
    title: "Blue Velvet",
    description: "Blue Velvet is a 1986 American neo-noir mystery film written and directed by David Lynch. Blending psychological horror with film noir, the film stars Kyle MacLachlan, Isabella Rossellini, Dennis Hopper, and Laura Dern, and is named after Bobby Vinton's 1963 song of the same name.",
    imageUrl: "BlueVelvet.png",
    feature: true,
    top_feature: false,
    video: "BlueVelvet.mp4"
)


m5 = Movie.create(
    title: "Mad Max",
    description: "Mad Max: Fury Road is a 2015 post-apocalyptic action film co-written, produced, and directed by George Miller. Miller collaborated with Brendan McCarthy and Nico Lathouris on the screenplay . . .",
    imageUrl: "mad_max.png",
    feature: true,
    top_feature: false,
    video: "MadMax.mp4"
) 