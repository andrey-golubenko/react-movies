
export interface IOneMovie  {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export interface ICustomEvent extends React.MouseEvent {
    key?: string
}

// ================== REDUX

export interface IMoviesListState {
    movieList: Array<IOneMovie>,
    totalFound: number,
    singleMovie : Partial<ISingleMovie>
}

export interface IMoviesAction  {
    type: string,
    payload: {
        fetchedMovies?: IOneMovie[],
        totalFound?: number,
        fetchedSingleMovie?: {}
    }
}

export interface IAppState {
    loadingStatus: boolean,
    alert: null | string
}

export interface IAppAction  {
    type: string,
    payload: {
        text: string
    }
}

export interface ISearchState {
    searchVal    : string,
    // searchedVal  : string,
    searchedType : string,
    currentPage  : number
}

export interface ISearchAction  {
    type: string,
    payload: {
        text?         : string,
        searchedText? : string,
        searchedType? : string
    }
}

export interface ISingleMovie {
    Title: string,
    Year: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Poster: string,
}

export interface ILoadableImageProps {
    src: string
    alt?: string
    onLoad?(): void
}
