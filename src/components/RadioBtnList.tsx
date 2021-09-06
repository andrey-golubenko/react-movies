import React from 'react'
import { useAppDispatch } from '../store/hooks'
import { setSearchedPageStart, setSearchedType } from '../store/actionCreatores'
import { useLocation, useHistory } from 'react-router-dom'


export const RadioBtnList: React.FC = () => {

    const dispatch = useAppDispatch();
    const { push } = useHistory();
    const { pathname, search } = useLocation();

    const getRadioPureParams = () => {
        let pureSearchParam = null;
        let pureTypeParam = 'all';

        if(search) {
            pureSearchParam = search.split('&')[1];
            pureSearchParam = '&' + pureSearchParam;
            pureTypeParam = search.split('&')[2].split('=')[1];
            pureTypeParam = pureTypeParam !== 'null' ? pureTypeParam : 'all';

        }
        return {
            pureSearchParam,
            pureTypeParam,
        }
    };

    const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {

        const typeParam = e.target.dataset.type;

        push({
           pathname,
           search: `${search ? getRadioPureParams().pureSearchParam : '&s=matrix'}&type=${ typeParam !== 'all' ? typeParam : null }`
        });

        const checkedTypeParam = typeParam ? typeParam : 'all';

        dispatch( setSearchedType( checkedTypeParam ) );
        dispatch( setSearchedPageStart() );
    };


    return (<div className="check-list">
                <p className='search-radio-movies'>
                    <label>
                        <input
                            name='group-choice'
                            type='radio'
                            data-type='all'
                            checked={getRadioPureParams().pureTypeParam === 'all'}
                            onChange={ handleChangeRadio }
                        />
                        <span>All</span>
                    </label>
                </p>
                <p className="search-radio-movies">
                    <label>
                        <input
                            name='group-choice'
                            type="radio"
                            data-type='movie'
                            checked={getRadioPureParams().pureTypeParam === 'movie'}
                            onChange={handleChangeRadio}
                        />
                        <span>Movies</span>
                    </label>
                </p>
                <p className="search-radio-movies">
                    <label>
                        <input
                            name='group-choice'
                            type="radio"
                            data-type='series'
                            checked={getRadioPureParams().pureTypeParam === 'series'}
                            onChange={handleChangeRadio}
                        />
                        <span>Series</span>
                    </label>
                </p>
            </div>
    )
};