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
                            <Link to={`/movies/${movie.id}`}>
                                <li id="li-flex">
                                    <img className="idx-thumb-hover" 
                                        src={movie.thumb_hover}/>
                                        <img className="vid-cap-container" 
                                        src="PulpFiction-back.png">
                                        </img>
                                        <div className="screenshot-flex">
                                            <div>
                                            <img className="screenshot"
                                                src={movie.screenshot} />
                                            </div>
                                       </div>
                                    <img className="idx-thumb" 
                                        src={movie.imageUrl} alt="" />
                                    <p>{movie.title}</p>
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>)
    }

export default FeaturedItems