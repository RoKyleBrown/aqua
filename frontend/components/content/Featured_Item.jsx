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
                            <div id="feat-icons">
                            <div id="feat-play">
                                <div id="play-container">
                                    <img
                                    src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/feat-play-btn.png" alt=""/>
                                </div>
                                <div id="watch-container">
                                    <p id="watch">Watch movie</p>
                                </div>
                            </div>
                            <div id="feat-actions">
                                    <img src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png" alt=""/>
                            </div>

                            </div>
                       </div>
                    </Link> 
                </div>
        )
    } else {
        
        return null;
    }
}


export default FeaturedItem;