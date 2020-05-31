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
                            <Link to="/content"><li id="my-content">
                                <span id="check-space"><img id="check-icon"
                                src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/check_icon.png" 
                                alt=""/></span>
                                <span>my content</span>
                            </li></Link>
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
                            <li>Manage Profiles</li>
                            <li>Account</li>
                            <li>Help Center</li>
                            <li id="logout-dropdown"
                            onClick={this.rightThing}>Log Out</li>
                        </ul>
                    </div>
                    <div id="featured-container" > 
                        <div className="featured-items"
                        >
                            {this.props.movies.map(movie =>
                               <FeaturedItem
                                    className="item-container"
                                    movie={movie}
                                />
                            )}
                        </div>
                            <div className="sub-items">
                                    <FeaturedItems
                                        movies={this.props.movies}
                                    />
                        </div>
                    </div>
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