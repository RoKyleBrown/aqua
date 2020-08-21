import React from 'react';
import Link from 'react-router-dom';

class NonFeatured extends React.Component {
    constructor (props) {
        super(props);
        this.playIcon = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/play-btn.png";
        this.removeMessage = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/removeMsg.png";
        this.addMsg = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/hoverMenu.png"
        this.state = {
            movies: this.props.movies, hovMsg: this.addMsg, clkMsg: '',
            user: this.props.currentUser
        }
        this.clickPlus = this.clickPlus.bind(this);
        this.whichIcon = this.whichIcon.bind(this);
        this.centerScreen = this.centerScreen.bind(this);
        this.plus = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png";
        this.check = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/check-circle.png";
        this.minus = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png";
    }

    noStinkinHyphens(item) {
        let newStr = ""

        if (item !== "sci-fi") {
            newStr = item.replace(/-/g, " ");
        } else {
            newStr = item;
        }

        return newStr;
    }

    centerScreen(el) {
        if (document.getElementById(el) !== null) {
            let element = document.getElementById(el);
            (element).scrollIntoView({ block: 'center' });
            element.id = `${el}-scroll`;
        }
    }

    showMsg(movieId) {

        if (Object.keys(this.props.currentUser.minus_check).includes(`${movieId}`)) {
            this.setState({ hovMsg: this.removeMessage });
            $(`.${movieId}b`).addClass("non-hov-msg-b");
        }

        $(`.${movieId}`).addClass("non-msg-b");
    }

    hideMsg(movieId) {
        $(`.${movieId}`).removeClass("non-msg-b");

        this.setState({ hovMsg: this.addMsg })
        $(`.${movieId}b`).removeClass("non-hov-msg-b");
    }
    whichIcon(movie) {
        let user = this.props.currentUser;
        let currMovie = movie;

        if (Object.keys(user.minus_check).includes(`${movie.id}`)) {
            currMovie.plus_check = this.check;
            this.setState({ movie: currMovie })
        } else {
            currMovie.plus_check = this.plus;
            this.setState({ movie: currMovie });
        }

    }

    clickPlus(movie) {
        let user = this.props.currentUser;
        let currMovie = movie;
        let clkAdd = `${movie.title} was added to My Content.`;
        let clkRmv = `${movie.title} was removed from My Content.`;

        $('.non-notify-contain-a').addClass('non-notify-contain');
        $('.non-notify-contain-a').removeClass('non-notify-contain-a');

        $('.non-notify-contain').height($(window).height());
        setTimeout(() => {
            $('.non-notify-contain').addClass('non-notify-contain-a');
            $('.non-notify-contain').removeClass('non-notify-contain');
        }, 4000)

        if (!(Object.keys(user.minus_check).includes(`${movie.id}`))) {
            user.minus_check[movie.id] = this.minus;
            currMovie.plus_check = this.check;
            currMovie.current_msg = clkAdd;
            this.setState({
                movie: currMovie, hovMsg: this.removeMessage,
                clkMsg: currMovie.current_msg, user: user
            });
            $(`.${movie.id}b`).addClass("non-hov-msg-b");

        } else {
            Object.keys(user.minus_check).forEach((selected) => {
                if (selected === `${movie.id}`) {
                    delete user.minus_check[movie.id]
                    currMovie.plus_check = this.plus;
                    currMovie.current_msg = clkRmv;
                    this.setState({ movie: currMovie });
                    this.setState({
                        hovMsg: this.addMsg,
                        clkMsg: currMovie.current_msg, user: user
                    });
                    $(`.${movie.id}b`).removeClass("non-hov-msg-b")
                }
            })
        }
        this.props.updateUser(user);
        this.props.updateMovie(currMovie);
    }

    path(movieId) {
        let hasClass = document.getElementsByClassName("vid-link-a");

        if (hasClass.length) {
            return `/movies/${movieId}`;
        } else {
            return `/content`;
        }

    }
    render() {

        let rows = [];
        let gridTitle = "Aqua's Choice";

        if (this.props.currentUser.minus_check !== null) {
            let selectedMovies = this.props.movies.filter((movie, i) =>
                i > 4 && i < 9
            )

            let numRows = Math.ceil(selectedMovies.length / 4);
            let rowStart = 0;

            for (let i = 0; i < numRows; i++) {
                rows[i] = selectedMovies.slice(rowStart, rowStart + 4);
                rowStart += 4;
            }

            if (!rows.length) gridTitle = "";

            return (
                <div id="funny-guy" >
                    <h3 id="movies-top">{gridTitle} </h3>
                    {rows.map(row =>
                        <ul className="non-content-row" id="non-content"
                            onMouseOver={(e) => {
                                e.preventDefault();
                                this.centerScreen("non-content");
                            }}
                            onMouseLeave={(e) => {
                                e.preventDefault();
                                if (document.getElementById("non-content-scroll") !== null) {
                                    document.getElementById("non-content-scroll").id = "non-content";
                                }
                            }}
                        >
                            {row.map(movie =>
                                <li>
                                    <div className="more-fun">
                                        <div className="non-thumb-size">
                                                <img className="non-thumb"
                                                    onClick={ (e) => {
                                                        e.preventDefault();
                                                        this.props.history
                                                         .push(`/movies/${movie.id}`)
                                                    }}
                                                    src={movie.selected_thumb} />
                                                <div className="non-play-flex">
                                                    <img id="non-play"
                                                        src={this.playIcon} />
                                                </div>
                                                <img id="non-screenshot"
                                                src={movie.screenshot} />
                                            </div>
                                            <div className="non-info-back">
                                                
                                            </div>
                                    </div>
                                    <div id="non-info"
                                        style={ {height: $(".non-info-back").height()}}
                                    >
                                        <p id="non-title">{movie.title}</p>
                                    <div id="non-info-appear">
                                        <div id="non-descrip">
                                            <p>
                                                {movie.year} &#8226; {this.noStinkinHyphens(movie.genre)}
                                            </p>
                                            <p> {movie.description}</p>
                                        </div>
                                        <div className={`${movie.id}b non-hov-msg`}>
                                            <img className={`${movie.id} non-msg`}
                                                    src={this.state.hovMsg} />
                                        </div>
                                        <div id="non-add-bar">
                                            <div className="non-click-plus">
                                                <img src={movie.plus_check}
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        this.clickPlus(movie)
                                                    }}
                                                    onLoad={(e) => {
                                                        e.preventDefault(e);
                                                        this.whichIcon(movie)
                                                    }}
                                                    onMouseMove={(e) => {
                                                        e.preventDefault()
                                                        this.showMsg(movie.id)
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.preventDefault()
                                                        this.hideMsg(movie.id)
                                                    }}

                                                />
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                </li>
                                
                            )}
                            <div id="non-div">

                            </div>
                            <div id="non-div-filler">

                            </div>
                        </ul>
                    )}
                    
                    <div className="non-notify-contain-a"
                    >
                        <div className="add-notify">
                            <h1>{this.state.clkMsg}</h1>
                        </div>
                    </div>

                    {window.addEventListener('resize', (e) => {
                        e.preventDefault();
                        $('.non-notify-contain').height($(window).height());
                    })}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default NonFeatured;