import React from 'react';
import BrowseMenu from "./browse_menu";

class YearsPage extends React.Component {

    constructor(props) {
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
        this.plus = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png";
        this.check = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/check-circle.png";
        this.minus = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png";
        this.rightThing = this.rightThing.bind(this);
        this.reRender = this.reRender.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovies()
        if (document.readyState == 'complete') {
            setTimeout(() => {
                $(".pre-browse-grid").addClass("browse-grid");
                $(".pre-browse-grid").removeClass("pre-browse-grid");
                $(".browse-ripple-flex")
                    .addClass("browse-ripple-flex-b");
                $(".footer-container-b").addClass("footer-container")
                $(".footer-container-b").removeClass("footer-container-b")
                $(".footer-container").height($(document).outerHeight())
                this.itemSelected();
            }, 360)
        }
    }

    componentDidUpdate(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            window.location.reload();
            if (document.readyState == 'complete') {
                setTimeout(() => {
                    $(".pre-browse-grid").addClass("browse-grid");
                    $(".pre-browse-grid").removeClass("pre-browse-grid");
                    $(".browse-ripple-flex")
                        .addClass("browse-ripple-flex-b");
                    $(".footer-container-b").addClass("footer-container")
                    $(".footer-container-b").removeClass("footer-container-b")
                }, 360)
            }
        }
    }

    reRender(e) {
        e.preventDefault()
        this.forceUpdate();
    }

    itemSelected() {
        let item = this.props.location.pathname[2];
        let subItem = this.props.match.params["decade"];

        if (item === 'g') {
            $(".genre").addClass("br-lt-li-b");
            $(".year").removeClass("br-lt-li-b");
            $(".genre-list").removeClass("genre-list-b")
            $(".year-list").addClass("year-list-b")
        } else {
            $(".year").addClass("br-lt-li-b");
            $(".genre").removeClass("br-lt-li-b");
            $(".genre-list").addClass("genre-list-b")
            $(".year-list").removeClass("year-list-b")
        }

        $(`.${subItem}`).addClass("browse-sub-item-b")


    }

    browseDropdown(e) {
        e.preventDefault();
        $(".browse-dropdown-b").addClass("browse-dropdown");
        $(".browse-dropdown-b").removeClass("browse-dropdown-b");
    }
    browseUp(e) {
        e.preventDefault();
        $(".browse-dropdown").addClass("browse-dropdown-b");
        $(".browse-dropdown").removeClass("browse-dropdown");
    }

    browseToggle(e) {
        e.preventDefault();

        if ($(".browse-dropdown").length) {
            $(".browse-dropdown").addClass("browse-dropdown-b");
            $(".browse-dropdown").removeClass("browse-dropdown");
        } else {
            $(".browse-dropdown-b").addClass("browse-dropdown");
            $(".browse-dropdown-b").removeClass("browse-dropdown-b");
        }
    }

    dropdown(e) {
        e.preventDefault();
        $(".user-dropdown-no-select").addClass("user-dropdown")
    }
    dropdownUp(e) {
        e.preventDefault();
        $(".user-dropdown-no-select").removeClass("user-dropdown")
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
            $(`.${movie.id}b`).addClass("non-hov-msg-b")

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

    rightThing() {
        this.props.logout(this.props.currentUser);
        this.props.history.push('/');
    }

    path(movieId) {
        let hasClass = document.getElementsByClassName("vid-link-a");
        let decade = this.props.match.params["decade"];

        if (hasClass.length) {
            return `/movies/${movieId}`;
        } else {
            return `/years/${decade}`;
        }

    }

    render() {
        let rows = [];
        let gridTitle = "movies";
        let decade = this.props.match.params["decade"];
        let matchedMovs = [];


        this.props.movies.forEach(movie => {
            if (movie.year !== undefined) {
                if (movie.year.slice(0, 3) === decade.slice(0, 3)) {
                    matchedMovs.push(movie);
                }
            }
        })

        let numRows = Math.ceil(matchedMovs.length / 4);
        let rowStart = 0;

        for (let i = 0; i < numRows; i++) {
            rows[i] = matchedMovs.slice(rowStart, rowStart + 4);
            rowStart += 4;
        }

        if (!rows.length) gridTitle = "";


        return (
            <div className="browse-page-back">
                <div className="nav-main" id="content-nav">
                    <ul className="nav-left">
                        <div >
                            <li className="nav-logo" id="content-nav-logo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.history.push('/movies')
                                }}
                            >aqua</li>
                        </div >

                        <li id="browse"
                            onMouseMove={this.browseDropdown}
                            onMouseLeave={this.browseUp}
                            onClick={this.browseToggle}
                        >
                            <span id="browse-space"><img id="browse-icon"
                                src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/browse_icon.png"
                                alt="" /></span>
                            <span>browse</span>
                        </li>
                        <li id="my-content"
                            onClick={() => {
                                this.props.history.push('/content')
                            }}
                        >
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
                <div className="browse-dropdown-b"
                    onMouseMove={this.browseDropdown}
                    onMouseLeave={this.browseUp}
                >
                    <BrowseMenu
                        movies={this.props.movies}
                        history={this.props.history}
                        fetchMovies={this.props.fetchMovies}
                    />
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
                <div className="pre-browse-grid"
                    onLoad={this.reRender}
                >
                    <h3 id="browse-title">{decade}</h3>
                    <div id="funny-guy" >

                        <h3 id="movies-top">{gridTitle}  </h3>
                        {rows.map(row =>
                            <ul className="non-content-row">
                                {row.map(movie =>
                                    <li>
                                        <div className="more-fun">
                                            <div className="non-thumb-size">
                                                <img className="non-thumb"
                                                    onClick={(e) => {
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
                                            style={{ height: $(".non-info-back").height() }}
                                        >
                                            <p id="non-title">{movie.title}</p>
                                            <div id="non-info-appear">
                                                <div id="non-descrip">
                                                    <p>
                                                        {movie.year} &#8226; {movie.genre}
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

                </div>
                <div className="browse-ripple-flex"
                    style={{
                        height: $(window).height()
                    }}>
                    <img src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/aqua_ripple.gif" />
                </div>
                <div className="footer-container-b"
                >
                    <div id="browse-rel-base">
                        <p>© 2020 Aqua</p>
                    </div>
                </div>
                
                {window.addEventListener('resize', (e) => {
                    e.preventDefault();
                    $(".footer-container").height($(document).height());
                })}

                {document.onreadystatechange = () => {
                    if (document.readyState === 'complete') {
                        setTimeout(() => {
                            $(".pre-browse-grid").addClass("browse-grid");
                            $(".pre-browse-grid").removeClass("pre-browse-grid");
                            $(".browse-ripple-flex")
                                .addClass("browse-ripple-flex-b");
                            $(".footer-container-b").addClass("footer-container")
                            $(".footer-container-b").removeClass("footer-container-b")
                            $(".footer-container").height($(document).outerHeight());
                            this.itemSelected();
                        }, 360)
                    }
                }}


            </div>
        )
    }
}

export default YearsPage;