import React, {useState, useEffect} from 'react'
import {Preloader} from '../components/Preloader';
import {MovieList} from '../components/MovieList';
import {Search} from '../components/Search';
import {IOneMovie} from "../interfaces";

export const Main: React.FunctionComponent = () => {
    const [movies, setMovies] = useState<IOneMovie[]>  ([]);
    const [total, setTotal] = useState<string> ('');
    const [loading, setLoading] = useState<boolean> (true);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=f1e70387&s=matrix`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setTotal(data.totalResults);
                setLoading(false);
            } )
            .catch((err) => {
                console.error(err);
                setLoading(false)
            })
    }, []);



    const searchMovies = (searchMainVal: string, typeVal: string, pageNum: number) => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=f1e70387&s=${searchMainVal ? searchMainVal : 'matrix'}&type=${typeVal !== 'all' ? typeVal : null}&page=${pageNum !== 1 ? pageNum : 1}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setTotal(data.totalResults);
                setLoading(false);
            } )
            .catch((err) => {
                console.error(err);
                setLoading(false)
            })
    };


        return (<main className="container content">
                    <Search searchMovies={ searchMovies } totalFound={ +total } />
                    {
                        loading ? <Preloader /> : <MovieList movies={movies} />
                    }
                </main>)
};