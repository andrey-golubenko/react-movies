export interface IMainProps {
    searchMovies (searchMainVal: string, typeVal: string, pageNum: number): void
    totalFound: number
}

export interface IRadioBtnListProps {
    searchData:  {
        search: string,
        searched: string,
        page: number,
        type: string
    }
    handleRadioBtn: (selectedType: string) => void
}

export interface IPaginationProps {
    searchData:  {
        search: string,
        searched: string,
        page: number,
        type: string
    }
    totalFound: number
    handlePage: (sign: string) => void
}

export interface IOneMovie  {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export interface IMainMoviesProps {
    movies: IOneMovie[]
}

export interface CustomEvent extends React.MouseEvent {
    key?: string
}
