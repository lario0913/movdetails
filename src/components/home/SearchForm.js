import React, { Component } from 'react'
import {FaSearch} from 'react-icons/fa'
import {connect} from 'react-redux'

import './SearchForm.css'
import {searchMovie} from '../../redux/actions/searchActions'

export class SearchForm extends Component {
    onChange = e => {
        this.props.searchMovie(e.target.value)
    }
    render() {
        return (
            <div className="searchForm__container">
                <h1>
                    <FaSearch /> Search for a Movie, TV Series ...
                </h1>
                <form className="searchForm">
                    <input 
                        type="text"
                        className="searchInput"
                        name="searchText"
                        placeholder="Search Movies, TV Series ..."
                        onChange={this.onChange}
                    />
                    <button type="submit" className="searchButton">
                        Search
                    </button>
                </form>

            </div>

        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})


export default connect(mapStateToProps, {searchMovie})(SearchForm)
