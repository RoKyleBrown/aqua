import React from 'react';
import { Link } from "react-router-dom";


const FeaturedItems = (props) => {
    if (props.movie.feature && !props.movie.top_feature){
    return (
        <div>
            <ul className="featured-items-flex">
                <Link to={`/movies/${props.movie.id}`}><li><img 
                src={props.movie.imageUrl} alt="" /></li></Link>
                <Link to={`/movies/${props.movie.id}`}><li><img 
                src={props.movie.imageUrl} alt="" /></li></Link>
                <Link to={`/movies/${props.movie.id}`}><li><img 
                src={props.movie.imageUrl} alt="" /></li></Link>
                <Link to={`/movies/${props.movie.id}`}><li><img 
                src={props.movie.imageUrl} alt="" /></li></Link>
            </ul>
        </div>
    )
    } else {
        return null;
    }
}

export default FeaturedItems