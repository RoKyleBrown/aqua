import React from 'react';
import { Link } from "react-router-dom";


const FeaturedItems = (props) => {
    
        let movies = []
        movies.push(props.movies.filter( movie => 
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
                                                        <img src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/play-btn.png" />
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
                                                <div id="feats-actions"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                        )}
                    </ul>
                </div>)
    }

export default FeaturedItems