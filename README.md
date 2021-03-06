# Aqua

[Live Link](http://aqua-app.herokuapp.com/)

![alt text](https://aqua-app-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2020-06-11+at+11.40.52+AM.png "ScreenShot")

## Overview

Aqua is a take on the streaming service, Hulu. It hosts movie content and features a customized color palette and design.

## Configuration

 ### Backend

  * PostgreSQL Database

  * Ruby on Rails
### Frontend

  * React.js with Redux

  * JavaScript

  * HTML5
  
  * CSS3
  
 ## Features
 
 ### User Authentication
 
  * Users are able to sign in with a unique e-mail and password combination
  
  * A user's password is encrypted using a BCrypt algorithm
  
 ### Index Page
 
 * The user experience on the main page was made to be comparable to Hulu's "Night Mode"
 
 * Users can navigate to different movies with the ability to play them
 
 * Hovering an each movie display replicates Hulu's hover actions
 
 * Each movie display allows the user add to "My Content" page for future viewing
 
 ![alt text](https://aqua-app-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2020-06-11+at+12.32.23+PM.png "ScreenShot 2")
 
 
 
 
 Allows user to add movie to "My Content" from the index page. Displays a check when added ("+" when yet to be added).
 
 ```javascript
 if (!(Object.keys(user.minus_check).includes(`${movie.id}`))) {
            user.minus_check[movie.id] = this.minus;
            currMovie.plus_check = this.check;
            currMovie.current_msg = clkAdd;
            this.setState({ movie: currMovie, hovMsg: this.removeMessage, 
                clkMsg: currMovie.current_msg, user: user });
            $(`.${movie.id}b`).addClass("feats-hov-msg-b");
            $(`.${movie.id}b`).removeClass("feats-hov-msg");

        } else {
            Object.keys(user.minus_check).forEach((selected) => {
                if (selected === `${movie.id}`) {
                    delete user.minus_check[movie.id]
                    currMovie.plus_check = this.plus;
                    currMovie.current_msg = clkRmv;
                    this.setState({ movie: currMovie });
                    this.setState({ hovMsg: this.addMsg, 
                        clkMsg: currMovie.current_msg, user: user });
                    $(`.${movie.id}b`).addClass("feats-hov-msg");
                    $(`.${movie.id}b`).removeClass("feats-hov-msg-b");
                }
            })
        }
        this.props.updateUser(user);
        this.props.updateMovie(currMovie);
```
 
 ### Video Page
 
 * The video page hosts an adaptive video PLAYER that adjusts to the user's browser dimensions
 
 * It features normal video interation, including seeking, title display/auto-hide, and video close-out
 
 ### "My Content" Page (CRUD)
 
 * This page replicates Hulu's "My Stuff" page with a similar user experience
 
 * A user can view the movies previously added from the index page
 
 * When users hover, a thumbnail from the movie is displayed also revealing minus (-) icon
 
 * When users click on the minus they are prompted with the ability to select more movies
 
 * Once the user has selected all of his or her movies, he or she is able to remove them from the "My Content" page
 
 ![alt text](https://aqua-app-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2020-06-11+at+12.53.39+PM.png "ScreenShot 3")
 
 Checks to see how many items are selected and returns an array of those items to remove.
 
  ```javascript
 if (this.deleteCount > 1){
      let arr = this.removeSelected();
      let newObj = {};

      arr.forEach( el => {
      newObj = this.removeVid(el);
      })
      this.deleteCount = 0;
      this.setState({ deleteCount: this.deleteCount })
      this.state.user.minus_check = newObj;
      this.setState({user: this.state.user });
      this.minusOut();
      this.props.updateUser(this.state.user)
           .then( () => this.props.history.push('/content'));
                                    
   }
```
 
  ### "Browse" Page
 
 * A user can view the movies filtered by either year or genre
 
 * When users hover, a similar action to Hulu's sub-features occurs (pictured)
 
 ![alt text](https://aqua-app-dev.s3-us-west-1.amazonaws.com/browse_screenshot.png "ScreenShot 4")
 
Filters movie objects that match the decade selected by the user. 

```javascript
let decade = this.props.match.params["decade"];
        let matchedMovs = [];
         
        this.props.movies.forEach( movie => {
                if (movie.year !== undefined) {
                    if (movie.year.slice(0,3) === decade.slice(0,3)) {
                        matchedMovs.push(movie)
                    }
                }
            })
```
 
 
