import React from "react";
import { Link } from 'react-router-dom';

class ContentPage extends React.Component {
    render() {
        let selectedContent = ['pulp_fiction_16_9.jpg', 'Blue_Velvet_16_9.jpg', 'ex_machina_16_9.png',
            'Mad_Max_16_9.png', 'godfather_16_9.jpg' ];
        let rows = [];
        let numRows = Math.ceil(selectedContent.length/4);
        let rowStart = 0;

        for (let i = 0; i < numRows; i++){
            rows[i] = selectedContent.slice(rowStart,rowStart + 4);
            rowStart += 4;
        }


        return (
            <div className="content-back">
                <div className="nav-main" id="content-nav">
                    <ul className="nav-left">
                        <Link to="/movies"><li className="nav-logo">aqua</li></Link>
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
                                T
                                {/* {`${this.props.currentUser.first_name[0]}`} */}
                            </span>
                            <span>
                                Test
                                {/* {this.props.currentUser.first_name} */}
                            </span></li>
                    </ul>
                </div>
                <div className="content-head">
                    <div id="content-head-info">
                        <h3>My Content</h3>
                        <p>Use the + to My Stuff button to add content you want to keep track of.</p>
                    </div>
                </div>
                <div className="selected-content">
                    <h3 id="movies-top">movies</h3>
                        {rows.map( row => 
                            <ul id="content-row">
                                {row.map(movie =>
                                    <li>
                                        <img src={movie} />
                                        <p id="w-m">watch movie</p>
                                        <p id="selected-movie-title">Movie Title</p>
                                    </li>
                                )}
                            </ul>    
                        )}
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
            </div>
        )
    }
}

export default ContentPage;