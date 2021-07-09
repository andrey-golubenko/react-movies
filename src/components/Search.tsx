import React, {useState, useRef} from 'react'
import {RadioBtnList} from './RadioBtnList';
import {Pagination} from './Pagination';
import { IMainProps, CustomEvent } from '../interfaces'

export const Search: React.FunctionComponent <IMainProps>  = (props) => {
    const [search, setSearch] = useState<string> ('');
    const [searched, setSearched] = useState<string> ('');
    const [page, setPage] = useState<number> (1);
    const [type, setType] = useState<string> ('all');

    const inputRef = useRef<HTMLInputElement> (null);

    const searchData = {
        search: search,
        searched: searched,
        page: page,
        type: type
    };


    const handleInput = () => {
        setSearch(inputRef.current!.value);
    };

    const transitUpInput = (event: React.KeyboardEvent | CustomEvent) => {
        if (event.key  === 'Enter' || event.currentTarget.className === 'btn search-btn red darken-1') {
            setPage(1);
            setSearched(search);
            props.searchMovies(search, type, 1);
        }
    };

    const handleRadioBtn = (selectedType: string) => {
        setType(selectedType);
        setPage(1);
        props.searchMovies(search, selectedType, 1);
    };

    const handlePage = (sign: string) => {
        if (sign === '+' && (page < Math.ceil(props.totalFound / 10)) ) {
            props.searchMovies(search, type, page + 1);
            setPage(prev => prev + 1);
        } else if (sign === '-' && page > 1) {
            props.searchMovies(search, type, page - 1);
            setPage(prev => prev - 1);
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
                                value={ search }
                                onChange={ handleInput }
                                onKeyPress={ (event ) => transitUpInput(event) }
                            />
                            <button className="btn search-btn red darken-1" onClick={(event) => { transitUpInput(event) }}>Search</button>
                        </div>
                        <RadioBtnList
                            searchData={ searchData }
                            handleRadioBtn={ handleRadioBtn }
                        />
                        <h5 className='total-found'>
                            {
                                searched && props.totalFound
                                    ? 'On request "' + searched + '", type - "' + type + '" total found : ' + props.totalFound + ' results'
                                    : 'Total ' + (props.totalFound
                                    ? props.totalFound
                                    :'not found') + ' movies and series'
                            }
                            { props.totalFound ? ' on ' + Math.ceil(props.totalFound / 10) + ' pages' : ''
                            }
                        </h5>
                        <Pagination
                            searchData={ searchData }
                            totalFound={ props.totalFound }
                            handlePage={ handlePage }
                        />
                    </div>
                </div>)
};