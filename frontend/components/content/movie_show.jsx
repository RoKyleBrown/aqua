import React from 'react';

class MovieShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.moviesId);
        this.props.fetchMovies();
    }
    frameVideo(e) {
        e.preventDefault();
        let vid = document.getElementById("show-video-height") ||
            document.getElementById("show-video-width");
        const body = document.querySelector("body")
        
        if (vid.offsetWidth > body.offsetWidth){
            vid.setAttribute("id", "show-video-width");

        } else if (vid.offsetHeight > body.offsetHeight) {
            vid.setAttribute("id", "show-video-height");
        } 
    }
    render () {
        if (!this.props.movie) return null;
        return (
            <div id="video-background">
                <div className="video-container">
                    <video id="show-video-height" onLoadStart={this.frameVideo} 
                        controls autoPlay>
                        <source src={this.props.movie.video} type="video/mp4" />
                    </video>
                </div>
                {window.addEventListener('resize', this.frameVideo)}
            </div>
        )
    }
}


export default MovieShow;