import React from 'react';
import { Link } from 'react-router-dom';


const FeaturedItem = (props) => {
    if (props.movie.top_feature) {
        return (
           
                <div className="movie-container" >
                    <Link to={`/movies/${props.movie.id}`}>
                        <div id="crop-image">
                            <img src={props.movie.imageUrl} />
                        </div>
                        <div id="movie-details">
                            <h3>{props.movie.title}</h3>
                            <p>{props.movie.description}</p>
                       </div>
                    </Link> 
                </div>
        )
    } else {
        
        return null;
    }
}


export default FeaturedItem;