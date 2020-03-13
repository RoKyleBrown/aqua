import { connect } from 'react-redux';
import { fetchMovie, fetchMovies } from '../../actions/movie_actions';
import Movieshow from './movie_show';


const mapStateToProps = (state, ownProps) => {

    return {
        movie: state.entities.movies[ownProps.match.params.moviesId],
        movies: Object.values(state.entities.movies)
    
    }
}


const mapDispatchToProps = (dispatch) => {
  
    return {
        fetchMovie: movie => dispatch(fetchMovie(movie)),
        fetchMovies: () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movieshow);