import React from "react";
import { Link } from 'react-router-dom';

class ContentPage extends React.Component {
    constructor(props) {
        super(props);
        this.rightThing = this.rightThing.bind(this);
        this.state = { user: this.props.currentUser, movies: this.props.movies,
        deleteCount: 0};
        this.removeVid = this.removeVid.bind(this);
        this.minus = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png";
        this.check = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/check-circle.png";
        this.switchIcon = this.switchIcon.bind(this);
        this.playIcon = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/play-btn.png";
        this.plus = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png";
        this.minusOut = this.minusOut.bind(this);
        this.minusOutPageLeave = this.minusOutPageLeave.bind(this);
        this.deleteCount = 0;
        // this.deleteClicks = this.deleteClicks.bind(this);
        this.removeSelected = this.removeSelected.bind(this);
    }

    componentDidMount(){
        this.props.fetchMovies();
        this.minusOut();

        if (document.readyState == 'complete') {
            setTimeout(() => {
                $(".content-pre-load").addClass("content-load");
                $(".content-ripple-flex")
                    .addClass("content-ripple-flex-b");
            }, 360)
        }
        
    }

    removeSelected(){
        let selectedIds = [];
        let currentUser = this.state.user;

        this.props.movies.forEach( movie => {
            if (movie.plus_minus === this.check) selectedIds.push(movie.id)
        })

        return selectedIds;
    }

   

    removeYes() {


        if (this.state.deleteCount === 0){
            return (
                <h1 className="remove">Remove</h1>
            )
        } else {
            return (
                <h1 className="remove">yes</h1>
            )
        }
        
    }

    numItems() {
        let num = 0;
        let itemS = "item";
        let thisThese = "this"

        this.props.movies.forEach( movie => {
            if (movie.plus_minus === this.check) num++;
        })

        if (num > 1) {
            itemS = "items";
            thisThese = "these";
        } 

        if (this.state.deleteCount === 0) {

            return (
                <h1 id="num-selected"><span>{num}</span> {itemS} Selected</h1>
            )
        } else {
           return ( 
                <h1 id="num-selected-b">Are you sure you want 
            to remove {thisThese} {itemS} from My Content?</h1>
            )
        }
    }

    minusOutPageLeave(){
        let user = this.props.currentUser;

        Object.keys(user.minus_check).forEach((key) => {
            user.minus_check[key] = this.minus;
        })

        this.setState({ user: user });
        this.props.history.push('/movies')
        // this.props.updateUser(user);
    }


    minusOut(){
        let user = this.props.currentUser;

        Object.keys(user.minus_check).forEach((key) => {
            user.minus_check[key] = this.minus;
        })

        $(".sel-thumb-b").addClass("sel-thumb");
        $(".sel-thumb-b").removeClass("sel-thumb-b");
        $(".play-flex-b").addClass("play-flex");
        $(".play-flex-b").removeClass("play-flex-b");
        $(".content-vid-buttons-b").addClass("content-vid-buttons");
        $(".content-vid-buttons-b").removeClass("content-vid-buttons-b");
        $(".vid-link-b").addClass("vid-link-a");
        $(".vid-link-b").removeClass("vid-link-b");
        $(".delete-back").addClass("delete-back-a");
        $(".delete-back").removeClass("delete-back");

        this.setState({ user: user });
        // this.props.updateUser(user);
    }

    dropdown(e) {
        e.preventDefault();
        $(".user-dropdown-no-select").addClass("user-dropdown")
    }
    dropdownUp(e) {
        e.preventDefault();
        $(".user-dropdown-no-select").removeClass("user-dropdown")
    }

    rightThing() {
        this.props.logout(this.props.currentUser);
        this.props.history.push('/');
    }

    removeVid(movieId) {

        delete this.state.user.minus_check[movieId];

        this.deleteCount = 0;
        return (this.state.user.minus_check)
    }

    switchIcon(movie) {

        let video = movie;
        let moreThanOneCheck = false;
        let user = this.props.currentUser;
        let count = 0;

        for (let i = 0; i < Object.keys(user.minus_check).length; i++){
            if (Object.values(user.minus_check)[i] === this.check){
                count++;
                if (count > 1){
                    moreThanOneCheck = true;
                    break;
                } 
            }
        }
        
       

        if (video.plus_minus === this.minus){

            $(".sel-thumb").addClass("sel-thumb-b");
            $(".sel-thumb").removeClass("sel-thumb");
            $(".play-flex").addClass("play-flex-b");
            $(".play-flex").removeClass("play-flex");
            $(".content-vid-buttons").addClass("content-vid-buttons-b");
            $(".content-vid-buttons").removeClass("content-vid-buttons");
            $(".vid-link-a").addClass("vid-link-b");
            $(".vid-link-a").removeClass("vid-link-a");
            $(".delete-back-a").addClass("delete-back");
            $(".delete-back-a").removeClass("delete-back-a");

            user.minus_check[video.id] = this.check;
            video.plus_minus = user.minus_check[video.id];

            } else {
            if (!moreThanOneCheck) {
                $(".sel-thumb-b").addClass("sel-thumb");
                $(".sel-thumb-b").removeClass("sel-thumb-b");
                $(".play-flex-b").addClass("play-flex");
                $(".play-flex-b").removeClass("play-flex-b");
                $(".content-vid-buttons-b").addClass("content-vid-buttons");
                $(".content-vid-buttons-b").removeClass("content-vid-buttons-b");
                $(".vid-link-b").addClass("vid-link-a");
                $(".vid-link-b").removeClass("vid-link-b");
                $(".delete-back").addClass("delete-back-a");
                $(".delete-back").removeClass("delete-back");
              }
            
            user.minus_check[video.id] = this.minus;
            video.plus_minus = user.minus_check[video.id];
            }
        
            this.setState({ movies: this.props.movies});
            this.setState({ user: user});
            this.props.updateUser(user);
            this.props.updateMovie(video);
    }

    path(movieId) {
        let hasClass = document.getElementsByClassName("vid-link-a");

        if (hasClass.length) {
            return `/movies/${movieId}`;
        } else {
            return `/content`;
        }
        
    }

    grid() {

        let rows = [];
        let gridTitle = "movies";

        if (this.props.currentUser.minus_check !== null) {
            let selectedMovies = this.props.movies.filter(movie =>
                Object.keys(this.props.currentUser.minus_check).includes(`${movie.id}`)
            )
        
        selectedMovies.forEach( (movie, i) => {
            selectedMovies[i].plus_minus = this.props.currentUser.minus_check[movie.id];
        })
        let numRows = Math.ceil(selectedMovies.length / 4);
        let rowStart = 0;

        for (let i = 0; i < numRows; i++) {
            rows[i] = selectedMovies.slice(rowStart, rowStart + 4);
            rowStart += 4;
        }

        if (!rows.length) gridTitle = "";
        
        return ( 
        <div className="content-pre-load">
            <h3 id="movies-top">{gridTitle}</h3>
            {rows.map( row =>
                <ul className="content-row">
                    {row.map( movie =>
                        <li>
                    
                                <Link className="vid-link-a" 
                                    to={this.path(movie.id)}
                                    ><div className="thumb-size">
                                    <img className="sel-thumb" 
                                         src={movie.selected_thumb} />
                                    <div className="content-vid-buttons">
                                        <div id="minus-flex">
                                            <img id="sel-minus" 
                                                className={`${movie.id}`}
                                                onClick={ (e) => {
                                                    e.preventDefault();
                                                    this.switchIcon(movie);
                                                }} 
                                            src={movie.plus_minus} />
                                        </div>
                                        <div className="play-flex">
                                            <img id="sel-play"
                                            src={this.playIcon} />
                                        </div>
                                    </div>
                                    <img id="sel-screenshot" 
                                         src={movie.screenshot} />
                                </div></Link>
                            <p id="w-m">watch movie</p>
                            <p id="selected-movie-title">{movie.title}</p>
                        </li>
                    )}
                </ul>
            )}
        </div>
         )
       } else {
           return null;
       }
    }

    render() {

        return (
            <div className="content-back">
                <div className="nav-main" id="content-nav">
                    <ul className="nav-left">
                        <div >
                            <li className="nav-logo" id="content-nav-logo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.minusOutPageLeave()
                                }}
                            >aqua</li>
                        </div >
 
                        <li id="browse">
                            <span id="browse-space"><img id="browse-icon"
                                src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/browse_icon.png"
                                alt="" /></span>
                            <span>browse</span>
                        </li>
                        <li id="my-content">
                            <span id="check-space"><img id="check-icon"
                                src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/check_icon.png"
                                alt="" /></span>
                            <span>my content</span>
                        </li>
                    </ul>
                    <ul className="nav-right">
                        <li id="search">
                            <span id="search-space"><img id="search-icon"
                                src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/search_icon.png"
                                alt="" /></span>
                            <span>search</span>
                        </li>
                        <li
                            className="user-btn"
                            onMouseOver={this.dropdown}
                            onMouseLeave={this.dropdownUp}
                        >
                            <span className="circle-letter">
                                {`${this.props.currentUser.first_name[0]}`}
                            </span>
                            <span>
                                {this.props.currentUser.first_name}
                            </span></li>
                    </ul>
                </div>
                <div className="user-dropdown-flex"
                    onMouseOver={this.dropdown}
                    onMouseLeave={this.dropdownUp}>
                    <ul className="user-dropdown-no-select">
                        <li className="line-top"><hr /></li>
                        <li id="logout-dropdown"
                            onClick={this.rightThing}>Log Out</li>
                    </ul>
                </div>
                <div className="content-head">
                    <div id="content-head-info">
                        <h3>My Content</h3>
                        <p>Use the <img id="plus-icon" src={this.plus}/>  
                        button to add content you want to keep track of.</p>
                    </div>
                </div>
                <div className="selected-content">
                    {this.grid()}
                    <div className="content-ripple-flex" 
                    style={{ height: $(window).height() 
                        - $(".content-head").height() }}>
                            <img src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/aqua_ripple.gif" />    
                    </div>
                </div>
                {window.addEventListener('scroll', (e) => {
                    e.preventDefault();
                    $(".nav-main").addClass("nav-main-scroll");
                    $(".nav-logo").addClass("nav-logo-scroll");
                    $(".circle-letter").addClass("circle-letter-scroll");
                })}

                {window.addEventListener('scroll', (e) => {
                    e.preventDefault();
                    if (window.scrollY === 0) {
                        $(".nav-main").removeClass("nav-main-scroll");
                        $(".nav-logo").removeClass("nav-logo-scroll");
                        $(".circle-letter").removeClass("circle-letter-scroll");
                    }
                })}

                {window.addEventListener('load', (e) => {
                    e.preventDefault();
                    this.minusOut();
                })}
                

                {document.onreadystatechange = () => {
                    if (document.readyState === 'complete') {
                        setTimeout( () => {
                            $(".content-pre-load").addClass("content-load");
                            $(".content-ripple-flex")
                                .addClass("content-ripple-flex-b");
                        }, 360) 
                    }   
                }}

                <div className="delete-container"
                    style={{ height: $(window).height()}}
                >
                    <div className="delete-back">
                        <div className="items-selected">
                            {this.numItems()}
                        </div>
                        <div className="content-btns">
                            <div className="cancel-btn"
                                 onClick={ e => {
                                     e.preventDefault();
                                     this.minusOut()
                                     this.deleteCount = 0;
                                     this.setState({ deleteCount: this.deleteCount });
                                 }}
                            >
                                <h1>Cancel</h1>
                            </div>
                            <div className="remove-yes-btn"
                                 onClick={ (e) => {
                                 e.preventDefault;
                                this.deleteCount++;
                                this.setState({ deleteCount: this.deleteCount})

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
                                    // window.location.reload();
                                    
                                 }}}
                            >
                                 {this.removeYes()}
                            </div>


                        </div>

                    </div>
                </div>
                {window.addEventListener('resize', (e) => {
                    e.preventDefault();
                    $('.delete-container').height($(window).height());
                    
                })}
                {window.addEventListener('load', (e) => {
                    e.preventDefault();
                    $('.delete-container').height($(window).height());
                })}
            </div>
        )
    }
}

export default ContentPage;