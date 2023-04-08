import {
    RECEIVE_MOVIES,
    RECEIVE_MOVIE
} from '../actions/movie_actions'


const moviesReducer = (oldState ={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign( {}, oldState);

    switch (action.type) {
        case RECEIVE_MOVIES:
            return action.movies;
        case RECEIVE_MOVIE:
            nextState[action.movie.id] = action.movie; 
            return nextState;
        default:
            return oldState;
    }
}


export default moviesReducer;
