import React from 'react';

class MovieShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.moviesId);
        this.props.fetchMovies();
    }
    render () {
        if (!this.props.movie) return null;
        return (
            <div className="video-container">
                <video id="show-video"  controls autoPlay>
                    <source src={this.props.movie.video} type="video/mp4"/>
                    </video> 
            </div>
        )
    }
}


export default MovieShow;