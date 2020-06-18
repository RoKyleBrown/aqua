import React from 'react';
import { Link } from 'react-router-dom';



class FeaturedItem extends React.Component {
    constructor(props) {
        super(props)
        this.removeMesage = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/removeMsg.png";
        this.addMsg = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/hoverMenu.png"
        this.state = ({ movie: this.props.movie, hovMsg: this.addMsg, clkMsg: ''});
        this.clickPlus = this.clickPlus.bind(this);
        this.whichIcon = this.whichIcon.bind(this);
        this.plus = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png";
        this.minus = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/minus-btn.png";
        this.check = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/check-circle.png";
        this.play = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/play-btn.png";
    }

    showMsg(movieId) {

        if (Object.keys(this.props.user.minus_check).includes(movieId)) {
            this.setState({ hovMsg: this.removeMesage });
            $(`.${movieId}b`).addClass("feat-hov-msg-b");
        }

        $(`.${movieId}`).addClass("feat-msg-b");
    }

    hideMsg(movieId) {
        $(`.${movieId}`).removeClass("feat-msg-b");

        this.setState({ hovMsg: this.addMsg })
        $(`.${movieId}b`).removeClass("feat-hov-msg-b");
    }
    whichIcon(movie) {
        let user = this.props.user;
        let currMovie = movie;

        if (Object.keys(user.minus_check).includes(`${movie.id}`)) {
            currMovie.plus_check = this.check;
            this.setState({ movie: currMovie })
            // this.props.updateMovie(currMovie)
        } else {
            currMovie.plus_check = this.plus;
            this.setState({ movie: currMovie });
            // this.props.updateMovie(currMovie);
        }

    }

    clickPlus(movie) {
        let user = this.props.user;
        let currMovie = movie;
        let clkAdd = `${movie.title} was added to My Content.`;
        let clkRmv = `${movie.title} was removed from My Content.`;

        $('.feat-notify-contain-a').addClass('feat-notify-contain');
        $('.feat-notify-contain-a').removeClass('feat-notify-contain-a');

        $('.feat-notify-contain').height($(window).height());
        setTimeout(() => {
            $('.feat-notify-contain').addClass('feat-notify-contain-a');
            $('.feat-notify-contain').removeClass('feat-notify-contain');
        }, 4000)

        if (!Object.keys(user.minus_check).includes(movie.id)) {
            currMovie.plus_check = this.check;
            user.minus_check[movie.id] = this.minus;
            currMovie.current_msg = clkAdd;
            this.setState({
                movie: currMovie, hovMsg: this.removeMesage,
                clkMsg: currMovie.current_msg
            });
            $(`.${movie.id}b`).addClass("feat-hov-msg-b")

        } else {
            Object.keys(user.minus_check).forEach((selected) => {
                if (selected === movie.id) {
                    delete user.minus_check[movie.id]
                    currMovie.plus_check = this.plus;
                    currMovie.current_msg = clkRmv;
                    this.setState({ movie: currMovie });
                    this.setState({
                        hovMsg: this.addMsg,
                        clkMsg: currMovie.current_msg
                    });
                    $(`.${movie.id}b`).removeClass("feat-hov-msg-b")
                }
            })
        }
        this.props.updateUser(user);
        this.props.updateMovie(currMovie);
    }

    render() {
        if (this.props.movie.top_feature) {
            return (

                <div className="movie-container" >
                    <Link >
                        <div id="crop-image">
                            <img src={this.props.movie.imageUrl} />
                        </div>
                        <div id="movie-details">
                            <h3>{this.props.movie.title}</h3>
                            <p>{this.props.movie.description}</p>
                            <div className="disp-msg">
                                <div className={`${this.state.movie.id}b feat-hov-msg`}>
                                    <img className={`${this.state.movie.id} feat-msg`}
                                        src={this.state.hovMsg} />
                                </div>
                            </div>
                            <div id="feat-icons">
                                <div className="feat-play" 
                                    onClick={() => this.props.history.push(`/movies/${this.state.movie.id}`)}>
                                    <div id="play-container">
                                        <img
                                            src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/feat-play-btn.png" />
                                    </div>
                                    <div id="watch-container">
                                        <p id="watch">Watch movie</p>
                                    </div>
                                </div>
                                
                                <div id="feat-actions" >
                                        <div id="feature-plus-btn" 
                                            onLoad={(e) => {
                                                e.preventDefault(e);
                                                this.whichIcon(this.state.movie)
                                            }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.clickPlus(this.state.movie);
                                            }}
                                            onMouseMove={(e) => {
                                                e.preventDefault()
                                                this.showMsg(this.state.movie.id)
                                            }}
                                            onMouseLeave={(e) => {
                                                e.preventDefault()
                                                this.hideMsg(this.state.movie.id)
                                            }} 
                                        >
                                            <img id="feat-check-plus" 
                                            src={this.state.movie.plus_check} />
                                        </div>
                                </div>
                            </div>
                                <div className="feat-notify-contain-a" >
                                    <div className="add-notify">
                                        <h1>{this.state.clkMsg}</h1>
                                    </div>
                                </div>

                                {window.addEventListener('resize', (e) => {
                                    e.preventDefault();
                                    $('.feat-notify-contain').height($(window).height());
                                })}
                        </div>
                    </Link>
                </div>
            )
        } else {

            return null;
        }

    }
}


export default FeaturedItem;