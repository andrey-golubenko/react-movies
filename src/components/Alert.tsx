import React from 'react'
import { useAppSelector } from '../store/hooks'


export const Alert: React.FC = () => {
    const message = useAppSelector(state => state.appKEY.alert);

    return (
        <div className="alert alert-danger" role="alert">
            { message }
        </div>
    )
};