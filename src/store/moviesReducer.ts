import { FETCH_MOVIES, FETCH_SINGLE_MOVIE, GET_TOTAL_FOUND } from './types'
import { IMoviesListState, IMoviesAction } from '../interfaces'

const initialState: IMoviesListState = {
    movieList   : [],
    totalFound  : 0,
    singleMovie : {}
};

export function moviesReducer (state = initialState, action: IMoviesAction): IMoviesListState {
    switch (action.type) {
        case FETCH_MOVIES : return { ...state, movieList: action.payload.fetchedMovies! };
        case GET_TOTAL_FOUND : return { ...state, totalFound: Number(action.payload.totalFound) };
        case FETCH_SINGLE_MOVIE : return { ...state, singleMovie: action.payload.fetchedSingleMovie! };

        default : return state
    }
}