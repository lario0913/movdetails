import React, { Component } from 'react'
import {connect} from 'react-redux'

import SearchForm from './SearchForm'
import Typicall from '../Typical/Typical';
import Spinner from '../spinner/Spinner';
import MoviesContainer from '../movies/MoviesContainer';

export class Landing extends Component {
    render() {
        const {loading,movies} = this.props
        
        return (
            <div className="landing">
                <SearchForm />
                {
                    loading ? <Spinner />                     
                            : movies.length === 0
                            ? <Typicall />
                            : <MoviesContainer />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movies: state.movies.movies
})

export default connect(mapStateToProps)(Landing)
