import React from 'react'

const Preloader: React.FunctionComponent = () => {
    return (
        <div className="progress red accent-1">
            <div className="indeterminate red darken-3" />
        </div>
    )

};

export {Preloader}