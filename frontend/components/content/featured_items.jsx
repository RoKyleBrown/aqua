import React from 'react';
import { Link } from "react-router-dom";


class FeaturedItems extends React.Component {
    constructor(props) {
        super(props);
        this.removeMesage = "https://aqua-app-dev.s3-us-west-1.amazonaws.com/removeMsg.png";
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
    
    showMsg(movieId) {

        if (Object.keys(this.props.user.minus_check).includes(movieId)){
            this.setState({ hovMsg: this.removeMesage });
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

        $('.notify-contain-a').addClass('notify-contain');
        $('.notify-contain-a').removeClass('notify-contain-a');

        $('.notify-contain').height($(window).height());
        setTimeout( () => {
            $('.notify-contain').addClass('notify-contain-a'); 
            $('.notify-contain').removeClass('notify-contain'); 
        }, 4000)

        if (!Object.keys(user.minus_check).includes(movie.id)) {
            user.minus_check[movie.id] = this.minus;
            currMovie.plus_check = this.check;
            currMovie.current_msg = clkAdd;
            this.setState({ movie: currMovie, hovMsg: this.removeMesage, 
                clkMsg: currMovie.current_msg, user: user });
            $(`.${movie.id}b`).addClass("feats-hov-msg-b")

        } else {
            Object.keys(user.minus_check).forEach((selected) => {
                if (selected === movie.id) {
                    delete user.minus_check[movie.id]
                    currMovie.plus_check = this.plus;
                    currMovie.current_msg = clkRmv;
                    this.setState({ movie: currMovie });
                    this.setState({ hovMsg: this.addMsg, 
                        clkMsg: currMovie.current_msg, user: user });
                    $(`.${movie.id}b`).removeClass("feats-hov-msg-b")
                }
            })
        }
        this.props.updateUser(user);
        this.props.updateMovie(currMovie);
    }

    render () {
    
    let movies = []
        movies.push(this.props.movies.filter( movie => 
            (movie.feature && !movie.top_feature)
            ))
            if (!movies[0][0]) return null;


             return  ( <div id="items">
                    <ul className="featured-items-flex">
                        {movies[0].map( movie => 
                            
                        <li id="li-flex">
                            <img className="idx-thumb-hover" 
                                src={movie.thumb_hover}/>
                                <img className="vid-cap-container" 
                                src="PulpFiction-back.png">
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
                     <div className="notify-contain-a"
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

export default FeaturedItems;