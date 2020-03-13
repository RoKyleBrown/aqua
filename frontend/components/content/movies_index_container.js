import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import { fetchMovies, fetchMovie } from '../../actions/movie_actions';
import MoviesIndex from './movies_index';

const mapStateProps = (state) => {
   
    return {
        
        currentUser: state.entities.users[state.session.id],
        movies: Object.values(state.entities.movies)
    }

}


const mapDispatchToProps = (dispatch) => {
    // login: user => dispatch(login(user)),
    return {
     fetchMovies: movies => dispatch(fetchMovies(movies)),
     fetchMovie: movieId => dispatch( fetchMovie(movieId)),
     logout: user => dispatch(logout(user))
}
}


export default connect(mapStateProps, mapDispatchToProps)(MoviesIndex);


