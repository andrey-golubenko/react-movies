import React from 'react'
import { Link } from 'react-router-dom'
import { IOneMovie } from '../interfaces'
import placeholder from '../media/image-placeholder.svg'
import {LoadableImage} from './LoadableImage/LoadableImage'


export const MovieItem: React.FC <IOneMovie>  = (props) => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;
    // "N/A" - not available
    return (<div id={ id } className="card">
        <div className="card-image waves-effect waves-block waves-light">
            <LoadableImage src={ poster === "N/A"
                                 ? placeholder
                                 : poster }
            />
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{ title }</span>
            <p>{ year }<span className="right">{ type }</span></p>
        </div>
        <div className="card-action center">
            <Link
                to={`/movie/${ id }`}
                className="btn red darken-3"
            >Watch details</Link>
        </div>
    </div>)
};