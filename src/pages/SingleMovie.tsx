import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { useHistory, useParams } from 'react-router-dom'
import { fetchSingleMovie } from "../store/actionCreatores";
import { Preloader } from '../components/Preloader'
import { LoadableImage } from '../components/LoadableImage/LoadableImage'


export const SingleMovie: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.appKEY.loadingStatus);
    const singleMovie = useAppSelector(state => state.moviesKEY.singleMovie);
    const { goBack } = useHistory();

    useEffect(() => {
        dispatch( fetchSingleMovie(`&i=${id}&plot=full`) )
    }, [dispatch, id]);

    return (
        <>
            {
                loading ? <Preloader />
                : ( <div className="single-movie center">
                        <div className="single-movie__content">
                            <div className="content__image">
                                <LoadableImage src={ singleMovie.Poster! } />
                            </div>
                            <div className="content__description">
                                <h4>{ singleMovie.Title }</h4>
                                <h5 className="description__data">Year : { singleMovie.Year }</h5>
                                <h5 className="description__data">Country : { singleMovie.Country }</h5>
                                <h5 className="description__data">Runtime : { singleMovie.Runtime }</h5>
                                <h5 className="description__data">Genre : { singleMovie.Genre }</h5>
                                <h5 className="description__data">Language : { singleMovie.Language }</h5>
                                <h5 className="description__data">Director : { singleMovie.Director }</h5>
                                <h5 className="description__data">Actors : { singleMovie.Actors }</h5>
                                <p className="description__plot">
                                    <span className="description__data">Plot : </span>{ singleMovie.Plot }
                                </p>
                            </div>
                        </div>

                        <button
                            className="btn"
                            onClick={ goBack }
                        >Go Back</button>
                     </div>
                   )
            }
        </>
    )
};
