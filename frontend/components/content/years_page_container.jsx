import { connect } from "react-redux";
import YearsPage from './years_page';
import { logout, updateUser } from '../../actions/session_actions';
import { updateMovie, fetchMovies } from '../../actions/movie_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        movies: Object.values(state.entities.movies),
        history: ownProps.history,
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
        updateMovie: movie => dispatch(updateMovie(movie)),
        fetchMovies: () => dispatch(fetchMovies()),
        logout: user => dispatch(logout(user)),
        updateUser: user => dispatch(updateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(YearsPage);

