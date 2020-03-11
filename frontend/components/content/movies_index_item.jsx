import React from 'react';


const MoviesIndexItem = (props) => {
    return (
        <div className="movie-container">
            <h1>{props.movie.title}</h1>
            <img src={props.movie.imageUrl} alt="GF"/>
            <video width="360" height="640" controls>
                <source src="test-vid.mp4" type="video/mp4"></source>
            </video>
        </div>


    )
}


export default MoviesIndexItem;