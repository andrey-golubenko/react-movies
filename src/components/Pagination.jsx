import React from 'react'

const Pagination = (props) => {

   const changePage = (sign) => {
        props.handlePage(sign);
   };

    return (
        <div className="next-btn-wrapper">
            <button
                className="btn prev-btn red darken-2"
                onClick={() => {changePage('-')}}><span>&#60;</span>Prev Page</button>
            <h5>Current page : {props.totalFound ? props.searchData.page : 0}</h5>
            <button
                className="btn next-btn red darken-2"
                onClick={() => {changePage('+')}}>Next Page<span>&#62;</span></button>
        </div>
    )

};

export {Pagination}
