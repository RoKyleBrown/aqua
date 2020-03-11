import React from 'react';


const MoviesIndexItem = (props) => {
    return (
        <div className="movie-container">
            <h1>{props.movie.title}</h1>
            <img src={props.movie.imageUrl} alt="GF"/>
        </div>


    )
}


export default MoviesIndexItem;