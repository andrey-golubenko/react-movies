import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setSearchedPageAdd, setSearchedPageRemove } from '../store/actionCreatores'
import { useLocation, useHistory } from 'react-router-dom'

export const Pagination: React.FC = () => {

    const dispatch = useAppDispatch();
    const totalFound = useAppSelector(state => state.moviesKEY.totalFound);
    const { search, pathname } = useLocation();
    const { push } = useHistory();

    const getPugPureParams = () => {
        let pureSearchParam = null;
        let pureTypeParam = 'all';
        let purePageParam = 1;
        if(search) {
            pureSearchParam = search.split('&')[1];
            pureSearchParam = '&' + pureSearchParam;
            pureTypeParam = search.split('&')[2].split('=')[1];
            if(search.split('&')[3]) {
                purePageParam = +search.split('&')[3].split('=')[1] || 1;
            } else {
                purePageParam = 1
            }
        }
        return {
            pureSearchParam,
            pureTypeParam,
            purePageParam
        }
    };

    const handlePrevPage = () => {
        const pureParams = getPugPureParams();
        if ( pureParams.purePageParam > 1 ) {
            push({
                pathname,
                search: `${search ? pureParams.pureSearchParam : '&s=matrix'}&type=${ pureParams.pureTypeParam !== 'all' ? pureParams.pureTypeParam : null}&page=${ pureParams.purePageParam - 1 }`
            });
            dispatch( setSearchedPageRemove() )
        }
    };

    const handleNextPage = () => {
        const pureParams = getPugPureParams();
        if ( pureParams.purePageParam < ( Math.ceil(totalFound / 10) ) ) {
            push({
               pathname,
               search: `${search ? pureParams.pureSearchParam : '&s=matrix'}&type=${ pureParams.pureTypeParam !== 'all' ? pureParams.pureTypeParam : null}&page=${ pureParams.purePageParam + 1 }`
            });
            dispatch( setSearchedPageAdd() )
        }
    };


    return (
        <div className="next-btn-wrapper">
            <button
                className="btn prev-btn red darken-2"
                onClick={ handlePrevPage }><span>&#60;</span>Prev Page</button>
            <h5 className="current-page">Current page : { totalFound ? getPugPureParams().purePageParam : 1 }</h5>
            <button
                className="btn next-btn red darken-2"
                onClick={ handleNextPage }>Next Page<span>&#62;</span></button>
        </div>
    )
};