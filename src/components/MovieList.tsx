import React from 'react'
import { MovieItem } from './MovieItem'
import { IOneMovie } from '../interfaces'
import { useAppSelector } from '../store/hooks'

export const MovieList: React.FC = () => {

    const movies = useAppSelector(state => state.moviesKEY.movieList);

    return (<div className="all-movies">
        { movies?.length ? (movies.map((movie: IOneMovie ) => {
                return <MovieItem key={movie.imdbID} {... movie}/>
                }
            ) ) : (<h2>Nothing found. Try again !</h2>)
            }
        </div> )
};