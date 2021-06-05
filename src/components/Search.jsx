import React from 'react'
import {RadioBtnList} from "./RadioBtnList";
import {Pagination} from "./Pagination";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search   : '',
            searched : '',
            page     : 1,
            type     : 'all'
        }

    }


    handleInput = (searchVal) => {
        this.setState({search: searchVal})
    };

    transitUpInput = (e) => {
        if (e.key === 'Enter' || e.target.className === 'btn search-btn red darken-1') {
            this.setState(
                {page: 1, searched: this.state.search},
                () => { this.props.searchMovies(this.state.search, this.state.type, this.state.page)
            } );
        }
    };

    handleRadioBtn = (selectedType) => {
        this.setState({type: selectedType, page: 1}, () => {this.props.searchMovies(this.state.search, this.state.type, this.state.page)});
    };

    handlePage = (sign) => {
        if (sign === '+' && (this.state.page < Math.ceil(this.props.totalFound / 10)) ) {
            this.setState({page: this.state.page + 1}, () => {this.props.searchMovies(this.state.search, this.state.type, this.state.page)})
        } else if (sign === '-' && this.state.page > 1) {
            this.setState({page: this.state.page - 1}, () => {this.props.searchMovies(this.state.search, this.state.type, this.state.page)})
        }
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
                            <button className="btn search-btn red darken-1" onClick={(e) => {this.transitUpInput(e)}}>Search</button>
                        </div>
                        <RadioBtnList
                            searchData={this.state}
                            handleRadioBtn={this.handleRadioBtn}
                        />
                        <h5 className='total-found'>
                            {
                                this.state.searched && this.props.totalFound
                                    ? 'On request "' + this.state.searched + '", type - "' + this.state.type + '" total found : ' + this.props.totalFound + ' results'
                                    : 'Total ' + (this.props.totalFound
                                    ? this.props.totalFound
                                    :'not found') + ' movies and series'
                            }
                            { this.props.totalFound ? ' on ' + Math.ceil(this.props.totalFound / 10) + ' pages' : ''
                            }
                        </h5>
                        <Pagination
                            searchData={this.state}
                            totalFound={this.props.totalFound}
                            handlePage={this.handlePage}
                        />
                    </div>
                </div>
    }
}

export {Search}