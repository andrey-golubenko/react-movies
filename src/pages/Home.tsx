import React, { useEffect } from 'react'
import { Preloader } from '../components/Preloader'
import { MovieList } from '../components/MovieList'
import { Search } from '../components/Search'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { fetchSearchedMovies } from '../store/actionCreatores'
import { Pagination } from '../components/Pagination'
import { useLocation } from 'react-router-dom'


export const Home: React.FC = () => {

    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.appKEY.loadingStatus);
    const { search } = useLocation();

    useEffect(() => {
        dispatch( fetchSearchedMovies( search ) )
    },[dispatch, search]);

    return (
        <>
            <Search />
            {
                loading ? <Preloader /> : <MovieList />
            }
            <Pagination />
        </>
    )
};