import React from "react";
import FeaturedItem from './Featured_Item';
import FeaturedItems from './featured_items'


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
                            <li>browse</li>
                            <li>my content</li>
                        </ul>
                        <ul className="nav-right">
                            <li>search</li>
                            <li 
                                className="user-btn"
                                onMouseOver={this.dropdown}
                            >{this.props.currentUser.first_name}</li>
                        </ul>
                    </div>
                    {window.addEventListener('scroll', (e) => {
                        e.preventDefault();
                        $(".nav-main").addClass("nav-main-scroll");
                        $(".nav-logo").addClass("nav-logo-scroll");
                    })}

                    {window.addEventListener('scroll', (e) => {
                        e.preventDefault();
                        if (window.scrollY === 0) {
                            $(".nav-main").removeClass("nav-main-scroll");
                            $(".nav-logo").removeClass("nav-logo-scroll");
                        }
                    })}

                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="user-dropdown-flex"
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
                    <div > 
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
                                {this.props.movies.map(movie =>
                                    <FeaturedItems
                                        movie={movie}
                                    />
                                )}
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
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