import React from 'react';


const FeaturedItem = (props) => {
    if (props.movie.top_feature) {
        return (
            <div className="movie-container">
                <img src={props.movie.imageUrl} />
                <h1>{props.movie.title}</h1>
            </div>
        )
    } else {
        return null;
    }
}


export default FeaturedItem;