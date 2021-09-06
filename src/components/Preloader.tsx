import React from 'react'

export const Preloader: React.FC = () => {
    return (
        <div className="progress red accent-1">
            <div className="indeterminate red darken-3" />
        </div>
    )
};
