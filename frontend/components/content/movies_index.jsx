import React from "react";
import FeaturedItem from './Featured_Item';
import FeaturedItems from './featured_items';
import {Link} from 'react-router-dom';


class MoviesIndex extends React.Component {
    constructor(props){
        super(props);
        this.rightThing = this.rightThing.bind(this)
        this.zoom = this.zoom.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovies();

        if (document.readyState == 'complete') {
            setTimeout(() => {
                $(".pre-featured-container").addClass("featured-container");
                $(".content-ripple-flex")
                    .addClass("content-ripple-flex-b");
            }, 2500)
        }
    }

    rightThing() {
       this.props.logout(this.props.currentUser);
       this.props.history.push('/');
    }

    dropdown(e) {
        e.preventDefault();
        $(".user-dropdown-no-select").addClass("user-dropdown")
    }
    dropdownUp(e) {
        e.preventDefault();
        $(".user-dropdown-no-select").removeClass("user-dropdown")
    }
    zoom(e) {
        e.preventDefault();
        $(".featured-items").addClass("featured-items-load");
    }

    render () {
        
        if (this.props.currentUser) {
            return (
                <div  className="app-background">
                    <div className="nav-main">
                        <ul className="nav-left">
                            <li className="nav-logo">aqua</li>
                            <li id="browse">
                                <span id="browse-space"><img id="browse-icon"
                                    src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/browse_icon.png" 
                                alt=""/></span>
                                <span>browse</span>
                            </li>
                            <li id="my-content" 
                                onClick={ () => {
                                    this.props.history.push('/content')
                            }}
                            >
                                <span id="check-space"><img id="check-icon"
                                src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/check_icon.png" 
                                alt=""/></span>
                                <span>my content</span>
                            </li>
                        </ul>
                        <ul className="nav-right">
                            <li id="search">
                                <span id="search-space"><img id="search-icon" 
                                src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/search_icon.png" 
                                alt=""/></span>
                                <span>search</span>
                            </li>
                            <li 
                                className="user-btn"
                                onMouseOver={this.dropdown}
                                onMouseLeave={this.dropdownUp}
                            >
                            <span className="circle-letter">{`${this.props.currentUser.first_name[0]}`}
                            </span> 
                            <span>{this.props.currentUser.first_name}</span></li>
                        </ul>
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


                    <div className="user-dropdown-flex"
                         onMouseOver={this.dropdown}
                         onMouseLeave={this.dropdownUp}>
                        <ul className="user-dropdown-no-select">
                            <li className="line-top"><hr /></li>
                            <li id="logout-dropdown"
                            onClick={this.rightThing}>Log Out</li>
                        </ul>
                    </div>
                    <div className="content-ripple-flex"
                        style={{
                            height: $(window).height() + 
                            $(".nav-main").outerHeight(true)
                        }}>
                        <img src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/aqua_ripple.gif" />
                    </div>
                    <div className="pre-featured-container" > 
                        <div className="featured-items">
                            {this.props.movies.map(movie =>
                               <FeaturedItem
                                    className="item-container"
                                    movie={movie}
                                    user={this.props.currentUser}
                                    updateUser = {this.props.updateUser}
                                    history={this.props.history}
                                    updateMovie={this.props.updateMovie}
                                />
                            )}
                        </div>
                            <div className="sub-items">
                                    <FeaturedItems
                                        movies={this.props.movies}
                                        user={this.props.currentUser}
                                        updateUser={this.props.updateUser}
                                        history={this.props.history}
                                        updateMovie={this.props.updateMovie}
                                    />
                        </div>
                        
                    </div>
                    {document.onreadystatechange = () => {
                        if (document.readyState === 'complete') {
                            setTimeout(() => {
                                $(".pre-featured-container")
                                    .addClass("featured-container");
                                $(".content-ripple-flex")
                                    .addClass("content-ripple-flex-b");
                            }, 2000)
                        }
                    }}
                </div>
            )
        }
        else {
            return (
                <div>Waiting.....</div>
            )
        }
    }
}

export default MoviesIndex; 