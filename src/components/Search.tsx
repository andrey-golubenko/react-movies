import React, { useRef } from 'react'
import { RadioBtnList } from './RadioBtnList'
import { Pagination } from './Pagination'
import { ICustomEvent } from '../interfaces'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { Alert } from './Alert'
import { defineSearchVal, setSearchedPageStart, setSearchedType } from '../store/actionCreatores'
import { useHistory, useLocation } from 'react-router-dom'

export const Search: React.FC = () => {

    const inputRef = useRef<HTMLInputElement> (null);
    const dispatch = useAppDispatch();
    const totalFound = useAppSelector(state => state.moviesKEY.totalFound);
    const message = useAppSelector(state => state.appKEY.alert);
    const searchVal = useAppSelector(state => state.searchKEY.searchVal);
    const { pathname, search } = useLocation();
    const { push } = useHistory();


    const getSearchPureParams = () => {
        let pureSearchParam = '';
        let pureTypeParam = 'all';
        if(search){
            pureSearchParam = search.split('&')[1].split('=')[1];
            pureTypeParam = search.split('&')[2].split('=')[1];
            pureTypeParam = pureTypeParam !== 'null' ? pureTypeParam : 'all';
        }
        return {
            pureSearchParam,
            pureTypeParam
        }
    };



    const handleInput = () => {
        dispatch( defineSearchVal( inputRef.current!.value ) );
    };

    const setHandledInput = (event: React.KeyboardEvent | ICustomEvent) => {
        if (event.key  === 'Enter' || event.currentTarget.className === 'btn search-btn red darken-1') {
            push({
                pathname,
                search: `&s=${ searchVal }&type=${ getSearchPureParams().pureTypeParam !== 'all' ? getSearchPureParams().pureTypeParam : null}`
            });

            dispatch( setSearchedPageStart() );
            dispatch( defineSearchVal( '' ) );
            dispatch( setSearchedType( getSearchPureParams().pureTypeParam ) );
        }
    };

        return (<div className="row">
                    <div className="col s12">
                        <div className="input-field search-field">
                            <input
                                ref={ inputRef }
                                className="validate"
                                placeholder="Search"
                                type="search"
                                value={ searchVal }
                                onChange={ handleInput }
                                onKeyPress={ setHandledInput }
                            />
                            <button
                                className="btn search-btn red darken-1"
                                onClick={ setHandledInput }
                            >Search</button>
                        </div>

                        { message && <Alert /> }

                        <RadioBtnList />
                        <h5 className='total-found'>
                            {
                                getSearchPureParams().pureSearchParam && totalFound
                                    ? `On request : '${getSearchPureParams().pureSearchParam}', type : '${getSearchPureParams().pureTypeParam}'  -  total found : ${totalFound} results`
                                    : `Total ${totalFound
                                    ? totalFound
                                    :'not found'} movies and series`
                            }
                            { totalFound ? ' on ' + Math.ceil(totalFound / 10) + ' pages' : ''
                            }
                        </h5>
                        <Pagination />
                    </div>
                </div>)
};