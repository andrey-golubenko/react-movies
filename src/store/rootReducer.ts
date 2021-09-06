import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { appReducer } from './appReducer'
import { searchReducer } from './searchReducer'

export const rootReducer = combineReducers({
    moviesKEY : moviesReducer,
    appKEY    : appReducer,
    searchKEY : searchReducer
});
