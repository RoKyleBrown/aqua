import React from 'react';
import { Link } from "react-router-dom";


const FeaturedItems = (props) => {

        let movies = []
        movies.push(props.movies.filter( movie => 
            (movie.feature && !movie.top_feature)
            ))
            debugger;
            if (!movies[0][0]) return null;
             return  ( <div>
                    <ul className="featured-items-flex">
                        <Link to={`/movies/${movies[0][0].id}`}><li><img
                            src={movies[0][0].imageUrl} alt="" /></li></Link>
                        <Link to={`/movies/${movies[0][1].id}`}><li><img
                            src={movies[0][1].imageUrl} alt="" /></li></Link>
                        <Link to={`/movies/${movies[0][2].id}`}><li><img
                            src={movies[0][2].imageUrl} alt="" /></li></Link>
                        <Link to={`/movies/${movies[0][3].id}`}><li><img
                            src={movies[0][3].imageUrl} alt="" /></li></Link>
                    </ul>
                </div>)
    }

export default FeaturedItems