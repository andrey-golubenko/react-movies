import {
    DEFINE_SEARCH_VALUE,
    FETCH_MOVIES, FETCH_SINGLE_MOVIE,
    GET_TOTAL_FOUND, HIDE_ALERT,
    HIDE_LOADER, SET_SEARCHED_PAGE_ADD, SET_SEARCHED_PAGE_REMOVE, SET_SEARCHED_PAGE_START, SET_SEARCHED_TYPE,
    SHOW_ALERT,
    SHOW_LOADER
} from './types'
import { Dispatch } from 'redux'


export function fetchSearchedMovies ( search: string ) {

    const trueSearch = search.substring(1);

    return async function (dispatch: Dispatch) {
        try {
            dispatch( hideAlert() );
            dispatch( showLoader() );
            const response = await fetch(`https://www.omdbapi.com/?apikey=f1e70387${ trueSearch ? trueSearch : '&s=matrix' }`);
            const data = await response.json();
            dispatch({ type: FETCH_MOVIES, payload: { fetchedMovies: data.Search } });
            dispatch({ type: GET_TOTAL_FOUND, payload: { totalFound: data.totalResults } });
            dispatch(hideLoader());
            if (!response.ok) {
                throw new Error()
            }
        }
        catch {
            dispatch( showAlert('Server Error! Please, try again later.') );
            dispatch(hideLoader());
        }
    }
}

export function fetchSingleMovie ( search: string ) {
    return async function (dispatch: Dispatch) {
        try {
            dispatch( hideAlert() );
            dispatch( showLoader() );
            const response = await fetch(`https://www.omdbapi.com/?apikey=f1e70387${ search }`);
            const data = await response.json();
            dispatch({ type: FETCH_SINGLE_MOVIE, payload: { fetchedSingleMovie: data } });
            dispatch(hideLoader());
            if (!response.ok) {
                throw new Error()
            }
        }
        catch {
            dispatch( showAlert('Server Error! Please, try again later.') );
            dispatch(hideLoader());
        }
    }
}

function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert (text: string) {
    return {
        type: SHOW_ALERT,
        payload: { text: text }
    }
}

export function hideAlert () {
    return {
        type: HIDE_ALERT,
    }
}

export function defineSearchVal (text: string) {
    return {
        type: DEFINE_SEARCH_VALUE,
        payload: {
            text: text
        }
    }
}

export function setSearchedType (searchedType: string | null ) {
    return {
        type: SET_SEARCHED_TYPE,
        payload: {
            searchedType: searchedType
        }
    }
}

export function setSearchedPageAdd () {
    return {
        type: SET_SEARCHED_PAGE_ADD,
    }
}

export function setSearchedPageRemove () {
    return {
        type: SET_SEARCHED_PAGE_REMOVE,
    }
}

export function setSearchedPageStart () {
    return {
        type: SET_SEARCHED_PAGE_START,
    }
}
