import React from 'react'
import {Preloader} from '../components/Preloader';
import {MovieList} from '../components/MovieList';
import {Search} from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies  : [],
            total   : '',
            loading : true
        }
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, total: data.totalResults, loading: false} ) )
    }

    searchMovies = (searchMainVal, typeVal, pageNum) => {
        this.setState({loading: true});
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchMainVal ? searchMainVal : 'matrix'}&type=${typeVal !== 'all' ? typeVal : null}&page=${pageNum !== 1 ? pageNum : 1}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, total: data.totalResults, loading: false} ) )
    };

    render () {
        const {movies, loading} = this.state;

        return (<main className="container content">
                    <Search searchMovies={this.searchMovies} totalFound={this.state.total} />
                    {
                        loading ? <Preloader /> : <MovieList movies={movies} />
                    }
                </main>)
    }
}

export {Main}