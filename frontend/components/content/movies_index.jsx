import React from "react";
import MoviesIndexItem from './movies_index_item';


class MoviesIndex extends React.Component {
    constructor(props){
        super(props);
        this.rightThing = this.rightThing.bind(this)
    }

    componentDidMount() {
        this.props.fetchMovies()
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
                    {this.props.movies.map( movie =>
                            <MoviesIndexItem 
                                className ="item-container"
                                movie={movie}
                            />
                        )}
                    <h3>Hello {this.props.currentUser.first_name}</h3>
                    <button onClick={this.rightThing}>Log Out
                    </button>

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