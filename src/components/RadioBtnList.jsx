import React from 'react'

const RadioBtnList = ({searchData, handleRadioBtn}) => {

    const handleChangeRadio = (e) => {
        handleRadioBtn(e.target.dataset.type)
    };


    return (<div className="check-list">
                <p className='search-radio-movies'>
                    <label>
                        <input
                            name='group-choice'
                            type='radio'
                            data-type='all'
                            checked={searchData.type === 'all'}
                            onChange={handleChangeRadio}
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
                            checked={searchData.type === 'movie'}
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
                            checked={searchData.type === 'series'}
                            onChange={handleChangeRadio}
                        />
                        <span>Series</span>
                    </label>
                </p>
            </div>
    )
};

export {RadioBtnList}