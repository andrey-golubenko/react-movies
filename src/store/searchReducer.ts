import { ISearchAction, ISearchState } from '../interfaces'
import {
    DEFINE_SEARCH_VALUE,
    SET_SEARCHED_PAGE_ADD, SET_SEARCHED_PAGE_REMOVE, SET_SEARCHED_PAGE_START,
    SET_SEARCHED_TYPE,
} from './types'

const initialSearchState: ISearchState = {
    searchVal    : '',
    // searchedVal  : '',
    searchedType : 'all',
    currentPage  : 1
};

export function searchReducer (state = initialSearchState, action: ISearchAction ): ISearchState {
    switch(action.type) {
        case DEFINE_SEARCH_VALUE : return { ...state, searchVal: action.payload.text! };
        case SET_SEARCHED_TYPE : return { ...state, searchedType: action.payload.searchedType! };
        case SET_SEARCHED_PAGE_ADD : return { ...state, currentPage: state.currentPage + 1 };
        case SET_SEARCHED_PAGE_REMOVE : return { ...state, currentPage: state.currentPage - 1 };
        case SET_SEARCHED_PAGE_START : return { ...state, currentPage: 1 };

        default : return state
    }
}
