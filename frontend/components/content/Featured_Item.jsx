import React from 'react';
import { Link } from 'react-router-dom';



class FeaturedItem extends React.Component {
    constructor(props) {
        super(props)
        this.addVid = this.addVid.bind(this);
    }

    addVid(e){
            e.preventDefault();
            let currentUser = this.props.user;

        if (currentUser.selected_movies !== null){
            if (!currentUser.selected_movies.includes(this.props.movie.id)) {
                currentUser.selected_movies.push(this.props.movie.id);
                this.props.updateUser(currentUser)
                    .then(this.props.history.push('/movies'))
                    window.location.reload(true);
                    window.location.reload(true);
            }
        } else {
            currentUser.selected_movies = [];
            currentUser.selected_movies.push(this.props.movie.id);
            this.props.updateUser(currentUser)
                .then(this.props.history.push('/movies'))
                window.location.reload(true);
                window.location.reload(true);
        }
    }

    render() {
        if (this.props.movie.top_feature) {
            return (

                <div className="movie-container" >
                    <Link to={`/movies/${this.props.movie.id}`} >
                        <div id="crop-image">
                            <img src={this.props.movie.imageUrl} />
                        </div>
                        <div id="movie-details">
                            <h3>{this.props.movie.title}</h3>
                            <p>{this.props.movie.description}</p>
                            <div id="feat-icons">
                                <div id="feat-play">
                                    <div id="play-container">
                                        <img
                                            src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/feat-play-btn.png" />
                                    </div>
                                    <div id="watch-container">
                                        <p id="watch">Watch movie</p>
                                    </div>
                                </div>
                                <div id="feat-actions" >
                                    <div id="feature-plus-btn" onClick={this.addVid}>
                                        <img src="https://aqua-app-dev.s3-us-west-1.amazonaws.com/add-btn.png" />
                                    </div>
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
}


export default FeaturedItem;