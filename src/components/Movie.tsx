import React from 'react'
import {IOneMovie} from '../interfaces'
import placeholder from '../static/image-placeholder.svg'


export const Movie: React.FunctionComponent <IOneMovie>  = (props) => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;
    // "N/A" - unused in browser image-format
    return (<div id={id} className="card">
        <div className="card-image waves-effect waves-block waves-light">
            <img
                className="activator"
                src={poster === "N/A"
                    ? placeholder
                    : poster}
                alt=""
            />
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year}<span className="right">{type}</span> </p>
        </div>
    </div>)
};