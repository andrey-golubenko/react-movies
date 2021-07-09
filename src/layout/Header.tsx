import React from 'react'

export const Header: React.FunctionComponent = () => {
    return <nav className="red darken-2">
                <div className="nav-wrapper">
                    <a href="https://andrey-golubenko.github.io/react-movies" className="brand-logo">Movies</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="https://github.com/Andrey-Golubenko/react-movies.git">Repo</a></li>
                    </ul>
                </div>
            </nav>

};