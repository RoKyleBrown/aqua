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
    imageUrl: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/godfather-hero.jpg",
    feature: true,
    top_feature: true,
    video: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/TheGodfather.mp4",
    screenshot: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/godfather-screenshot.png",
    selected_thumb: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/godfather_16_9.jpg",
    plus_check: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png",
    current_msg: "The Godfather was added to My Content.",
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png",
    genre: "crime drama",
    year: "1972"
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
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png",
    genre: "crime drama",
    year: "1994"
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
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png",
    genre: "sci-fi",
    year: "2014"
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
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png",
    genre: "crime drama",
    year: "1986"
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
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png",
    genre: "action",
    year: "2015"
) 

#non-featured

m6 = Movie.create(
    title: "Vertigo",
    description: "Following his early retirement as a detective from the San Francisco Police Department, John Ferguson - Scottie to his friends - becomes obsessed with two women in succession, those obsessions which trouble his long time friend and former fiancée, Midge Wood, a designer of women's undergarments.",
    imageUrl: "none",
    feature: false,
    top_feature: false,
    video: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/Vertigo.mp4",
    screenshot: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/vertigo-screenshot.png",
    thumb_hover: "",
    selected_thumb: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/Vertigo_16_9.png",
    plus_check: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png",
    current_msg: "Vertigo was added to My Content.",
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png",
    genre: "romance",
    year: "1958"
) 
m7 = Movie.create(
    title: "Spirited Away",
    description: "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area.",
    imageUrl: "none",
    feature: false,
    top_feature: false,
    video: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/SpiritedAway.mp4",
    screenshot: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/SpirtedAway-screenshot.png",
    thumb_hover: "",
    selected_thumb: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/SpiritedAway_16_9.jpg",
    plus_check: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png",
    current_msg: "Spirited Away was added to My Content.",
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png",
    genre: "animation",
    year: "2001"
) 
m8 = Movie.create(
    title: "Mo' Better Blues",
    description: "Financially irresponsible Giant (Spike Lee) manages a jazz group, but his sax player, Shadow (Wesley Snipes), wants to replace him with a better businessman. Bleak (Denzel Washington), the band's trumpeter, then tries to defend his close pal Giant, leading to a power struggle between the two musicians.",
    imageUrl: "none",
    feature: false,
    top_feature: false,
    video: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/mobetter.mp4",
    screenshot: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/mobetter-screenshot.png",
    thumb_hover: "",
    selected_thumb: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/MoBetta_16_9.jpg",
    plus_check: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png",
    current_msg: "Mo' Better Blues was added to My Content.",
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png",
    genre: "romance",
    year: "1990"
) 
m9 = Movie.create(
    title: "Birdman",
    description: "Actor Riggan Thomson is most famous for his movie role from over twenty years ago of the comic book superhero Birdman in the blockbuster movie of the same name and its two equally popular sequels. His association with the role took over his life, where Birdman is more renowned than 'Riggan Thomson' the actor.",
    imageUrl: "none",
    feature: false,
    top_feature: false,
    video: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/birdman.mp4",
    screenshot: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/birdman-screenshot.png",
    thumb_hover: "",
    selected_thumb: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/Birdman_16_9.jpg",
    plus_check: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png",
    current_msg: "Birdman was added to My Content.",
    plus_minus: "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png",
    genre: "drama",
    year: "2014"
) 


#users

u1 = User.create(
    email: "guest@aqua.com",
    password: "123asd",
    last_name: "",
    first_name: "guest",
    selected_movies: [m2.id, m5.id],
    minus_check: { "#{m2.id}" => "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png", 
    "#{m5.id}" => "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png"}
)
u2 = User.create(
    email: "chris@aqua.com",
    password: "123asd",
    last_name: "Jordan",
    first_name: "Chris",
    selected_movies: [m2.id],
    minus_check: { "#{m2.id}" => "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png"}
  
)







