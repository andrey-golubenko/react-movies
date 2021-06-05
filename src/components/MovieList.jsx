import React from 'react'
import {Movie} from "./Movie";

const MovieList = (props) => {

    const {movies = []} = props;
    return ( <div className="movies">
            {movies.length ? ( movies.map((movie) => {
                return <Movie key={movie.imdbID} {... movie}/>
                }
            ) ) : (<h2>Nothing found. Try again !</h2>)
            }
        </div> )




};

export {MovieList}