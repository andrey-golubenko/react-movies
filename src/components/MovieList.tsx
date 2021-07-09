import React from 'react'
import {Movie} from "./Movie";
import {IMainMoviesProps} from '../interfaces'

export const MovieList: React.FunctionComponent <IMainMoviesProps> = (props) => {

    const {movies = []} = props;

    return ( <div className="all-movies">
            {movies.length ? ( movies.map((movie) => {
                return <Movie key={movie.imdbID} {... movie}/>
                }
            ) ) : (<h2>Nothing found. Try again !</h2>)
            }
        </div> )
};