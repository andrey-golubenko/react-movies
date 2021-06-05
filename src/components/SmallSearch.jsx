import React from 'react'

class SmallSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            type: 'all'
        }

    }

    handleInput = (searchVal) => {
        this.setState({search: searchVal})
    };

    transitUpInput = (e) => {
        if (e.key === 'Enter' || e.target.className === 'btn search-btn')
            this.props.searchMovies(this.state.search, this.state.type)
    };

    handleType = (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {this.props.searchMovies(this.state.search, this.state.type)})
    };

    render() {

        return <div className="row">
            <div className="col s12">
                <div className="input-field search-field">
                    <input
                        className="validate"
                        placeholder="Search"
                        type="search"
                        value={this.state.search}
                        onChange={ (e) => { this.handleInput(e.target.value) } }
                        onKeyDown={this.transitUpInput}
                    />
                    <button className="btn search-btn" onClick={this.transitUpInput}>Search</button>
                </div>
                <div className="check-list">
                    <p>
                        <label>
                            <input
                                name="group1"
                                type="radio"
                                data-type="all"
                                onChange={this.handleType}
                                checked={this.state.type === "all"}
                            />
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                name="group1"
                                type="radio"
                                data-type="movie"
                                onChange={this.handleType}
                                checked={this.state.type === "movie"}
                            />
                            <span>Movie</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                name="group1"
                                type="radio"
                                data-type="series"
                                onChange={this.handleType}
                                checked={this.state.type === "series"}
                            />
                            <span>Series</span>
                        </label>
                    </p>
                </div>
            </div>
        </div>
    }
}

export {SmallSearch}