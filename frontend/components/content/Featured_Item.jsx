import React from 'react';
import { Link } from 'react-router-dom';


const FeaturedItem = (props) => {
    if (props.movie.top_feature) {
        return (
            <div className="movie-container" >
                <Link to={`/movies/${props.movie.id}`}>
                    <img src={props.movie.imageUrl} />
                    <h3>{props.movie.title}</h3>
                </Link> 
            </div>
        )
    } else {
        
        return null;
    }
}


export default FeaturedItem;