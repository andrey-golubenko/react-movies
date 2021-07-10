export interface IMainProps {
    searchMovies (searchMainVal: string, typeVal: string, pageNum: number): void
    totalFound: number
}

interface ISearchData {
    search: string,
    searched: string,
    page: number,
    type: string
}

export interface IRadioBtnListProps {
    searchData: ISearchData
    handleRadioBtn: (selectedType: string) => void
}

export interface IPaginationProps {
    searchData:  ISearchData
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

export interface ICustomEvent extends React.MouseEvent {
    key?: string
}