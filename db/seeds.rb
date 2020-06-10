# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#16:9, 9:16

Movie.destroy_all
User.destroy_all

#Movies

#Top-feature

m1 = Movie.create(
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son . . .",
    imageUrl: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/godfather-hero.png",
    feature: true,
    top_feature: true,
    video: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/TheGodfather.mp4",
    screenshot: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/godfather-screenshot.png",
    selected_thumb: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/godfather_16_9.jpg",
    plus_check: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png",
    current_msg: "The Godfather was added to My Content.",
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png"
)   


#features 

m2 = Movie.create(
    title: "Pulp Fiction",
    description: "Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles.",
    imageUrl: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/pulp-fiction.png",
    feature: true,
    top_feature: false,
    video: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/PulpFiction.mp4",
    screenshot: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/PulpFiction-screenshot.png",
    thumb_hover: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/PulpFiction-thumb.png",
    selected_thumb: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/pulp_fiction_16_9.jpg",
    plus_check: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png",
    current_msg: "Pulp Fiction was added to My Content.",
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png"
)   
m3 = Movie.create(
    title: "Ex Machina",
    description: "Ex Machina is a 2014 science fiction film written and directed by Alex Garland. Domhnall Gleeson, Alicia Vikander, and Oscar Isaac star in a story that follows a programmer who is invited by his CEO to administer the Turing test to an intelligent humanoid robot.",
    imageUrl: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/ExMachina.png",
    feature: true,
    top_feature: false,
    video: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/ExMachina.mp4",
    screenshot: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/ExMachina-screenshot.png",
    thumb_hover: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/ExMachina-thumb.png",
    selected_thumb: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/ex_machina_16_9.png",
    plus_check: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png",
    current_msg: "Ex Machina was added to My Content.",
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png"
)   


m4 = Movie.create(
    title: "Blue Velvet",
    description: "Blue Velvet is a 1986 American neo-noir mystery film written and directed by David Lynch. Blending psychological horror with film noir, the film stars Kyle MacLachlan, Isabella Rossellini, Dennis Hopper, and Laura Dern, and is named after Bobby Vinton's 1963 song of the same name.",
    imageUrl: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/BlueVelvet.png",
    feature: true,
    top_feature: false,
    video: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/BlueVelvet.mp4",
    screenshot: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/BlueVelvet-screenshot.png",
    thumb_hover: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/BlueVelvet-thumb.png",
    selected_thumb: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/Blue_Velvet_16_9.jpg",
    plus_check: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png",
    current_msg: "Blue Velvet was added to My Content.",
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png"
)


m5 = Movie.create(
    title: "Mad Max",
    description: "Mad Max: Fury Road is a 2015 post-apocalyptic action film co-written, produced, and directed by George Miller. Miller collaborated with Brendan McCarthy and Nico Lathouris on the screenplay . . .",
    imageUrl: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/mad_max.png",
    feature: true,
    top_feature: false,
    video: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/MadMax.mp4",
    screenshot: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/MadMax-screenshot.png",
    thumb_hover: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/MadMax-thumb.png",
    selected_thumb: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/Mad_Max_16_9.jpg",
    plus_check: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png",
    current_msg: "Mad Max was added to My Content.",
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png"
) 

#non-featured

#users

u1 = User.create(
    email: "guest@aqua.com",
    password: "123asd",
    last_name: "",
    first_name: "guest",
    selected_movies: [m2.id, m5.id]
)
u2 = User.create(
    email: "chris@aqua.com",
    password: "123asd",
    last_name: "Jordan",
    first_name: "Chris",
    selected_movies: [m2.id]
)







