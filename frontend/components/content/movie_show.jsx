import React from 'react';
import { Link } from "react-router-dom";

class MovieShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.moviesId);
        this.props.fetchMovies();
    }
    frameVideo(e) {
        e.preventDefault();
        let vid = document.getElementById("show-video-height") ||
            document.getElementById("show-video-width");
        const body = document.querySelector("body");
        
        if (vid.offsetWidth > body.offsetWidth){
            vid.setAttribute("id", "show-video-width");

        } else if (vid.offsetHeight > body.offsetHeight) {
            vid.setAttribute("id", "show-video-height");
        } 
    }
 
    videoOver(e) {
        e.preventDefault();
        $(".vid-overlay-initial").addClass("vid-overlay");
        let vid = document.getElementById("show-video-height") ||
            document.getElementById("show-video-width");

        if (!vid.paused) {
            document.addEventListener("mouseleave", () => {
                $(".vid-overlay-initial").removeClass("vid-overlay");
            })

            setTimeout(() => {
                $(".vid-overlay-initial").removeClass("vid-overlay");
            }, 3000);
        }
    }
    render () {
        if (!this.props.movie) return null;
        return (
            <div id="video-background" >
                <div className="video-container" onMouseMove={this.videoOver}>
                    <div className="vid-overlay-initial" >
                        <div id="vid-heading" onMouseOver={this.videoOver}>
                            <div id="vid-title">{this.props.movie.title}</div>
                            <div id="vid-close" 
                                onClick={() => 
                                {this.props.history.goBack()}}
                                onMouseOver={this.videoOver}
                                >&#x2715;
                                
                            </div>
                        </div>
                    </div>
                    <video id="show-video-height" className="video-dim" 
                        onLoadStart={this.frameVideo} 
                        controls autoPlay>
                        <source 
                         src={this.props.movie.video} type="video/mp4" />
                    </video>
                </div>
                {document.addEventListener('resize', this.frameVideo)}
            </div>
        )
    }
}


export default MovieShow;