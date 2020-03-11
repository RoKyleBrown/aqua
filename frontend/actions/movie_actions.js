import * as APIUtil from '../util/movie_api_util';


export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

const receiveMovies = (movies) => ({
    type: RECEIVE_MOVIES,
    movies
})

const receiveMovie = (movie) => ({
    type: RECEIVE_MOVIE,
    movie
})


export const fetchMovies = () =>  (dispatch) => (
    APIUtil.fetchMovies()
        .then((movies) => dispatch(receiveMovies(movies)))
)

export const fetchMovie = (movieId) => (dispatch) => (
    APIUtil.fetchMovie(movieId)
        .then(movie => dispatch(receiveMovie(movie)))
)