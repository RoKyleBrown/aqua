import React from 'react';
import { Link } from "react-router-dom";


class FeaturedItems2 extends React.Component {
    constructor(props) {
        super(props);
        this.removeMessage = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/removeMsg.png";
        this.addMsg = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/hoverMenu.png"
        this.state = { movies: this.props.movies, hovMsg: this.addMsg, clkMsg: '',
                     user: this.props.user}
        this.clickPlus = this.clickPlus.bind(this);
        this.whichIcon = this.whichIcon.bind(this);
        this.plus = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png";
        this.check = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/check-circle.png";
        this.play = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/play-btn.png";
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

    showMsg(movieId) {

        if (Object.keys(this.props.user.minus_check).includes(`${movieId}`)){
            this.setState({ hovMsg: this.removeMessage });
            $(`.${movieId}b`).addClass("feats-hov-msg-b");
        }

        $(`.${movieId}`).addClass("msg-b");
    }

    hideMsg(movieId) {
        $(`.${movieId}`).removeClass("msg-b");

        this.setState({ hovMsg: this.addMsg })
        $(`.${movieId}b`).removeClass("feats-hov-msg-b");
    }
    whichIcon(movie){
        let user = this.props.user;
        let currMovie = movie;

        if (Object.keys(user.minus_check).includes(`${movie.id}`)){
            currMovie.plus_check = this.check;
            this.setState({ movie: currMovie })
        } else {
            currMovie.plus_check = this.plus;
            this.setState({ movie: currMovie });
            
        }
      
    }

    clickPlus(movie) {
        let user = this.props.user;
        let currMovie = movie;
        let clkAdd = `${movie.title} was added to My Content.`;
        let clkRmv = `${movie.title} was removed from My Content.`;

        $('.feats2-notify-contain-a').addClass('feats2-notify-contain');
        $('.feats2-notify-contain-a').removeClass('feats2-notify-contain-a');

        $('.feats2-notify-contain').height($(window).height());
        setTimeout( () => {
            $('.feats2-notify-contain').addClass('feats2-notify-contain-a'); 
            $('.feats2-notify-contain').removeClass('feats2-notify-contain'); 
        }, 4000)

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
    }

    render () {
    
        let movies = [];
        let count = 0;

        this.props.movies.forEach((movie) => {
            if (movie.feature && !movie.top_feature) {
                if (count > 3 && count < 8) movies.push(movie);
                count++;
            }
        })

        if (!movies.length) return null;


        return (<div className="items">
            <ul className="featured-items-flex"
                id="flex2"
            >
                {movies.map(movie =>
                            
                        <li id="li-flex">
                            <img className="idx-thumb-hover" 
                                src={movie.thumb_hover}/>
                                <img className="vid-cap-container" 
                            src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/PulpFiction-back.png">
                                </img>
                                <div className="screenshot-flex">
                                    <div id="screenshot-form">
                                            <img className="screenshot"
                                                src={movie.screenshot} />
                                    </div>
                                    <div id="fun">
                                <Link to={`/movies/${movie.id}`}>
                                        <div id="feats-play-link">
                                            <div id="feats-play-scale">
                                                <img src={this.play} />
                                            </div>
                                        </div>
                                </Link></div>
                                </div>
                            <img className="idx-thumb" 
                                src={movie.imageUrl} alt="" />
                            <div id="features-info">
                                <div id="feats-info-container">
                                    <div id="feats-title">
                                        <p>{movie.title}</p> 
                                    </div>
                                    <div id="feats-descrip">
                                        <div id="feats-details">
                                                <p>{movie.year} &#8226; {this.noStinkinHyphens(movie.genre)}</p>
                                            <p>{movie.description}</p>
                                        </div>
                                        <div id="feats-actions">
                                            <div className={`${movie.id}b feats-hov-msg`}>
                                                <img className={`${movie.id} msg`}
                                                 src={this.state.hovMsg}/>
                                            </div>
                                            <div id="feats-actions-bar">
                                                <div id="feats-plus">
                                                    <img id="check-plus"
                                                    onLoad={(e) => {
                                                        e.preventDefault(e);
                                                        this.whichIcon(movie)
                                                    }} 
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        this.clickPlus(movie);
                                                    }}
                                                    onMouseMove={(e) => {
                                                        e.preventDefault()
                                                        this.showMsg(movie.id)
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.preventDefault()
                                                        this.hideMsg(movie.id)
                                                    }} 
                                                    src={(movie.plus_check)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        )}
                    </ul>
                     <div className="feats2-notify-contain-a"
                     >
                        <div className="add-notify">
                            <h1>{this.state.clkMsg}</h1>
                        </div>
                     </div>

                     {window.addEventListener('resize', (e) => {
                         e.preventDefault();
                         $('.notify-contain').height($(window).height());
                     })}
                </div>)

        }
    }

export default FeaturedItems2;