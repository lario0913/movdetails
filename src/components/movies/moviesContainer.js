import React, { Component } from 'react'
import {connect} from 'react-redux'
import ErrorMessage from '../error/ErrorMessage'

import './Movies.css'
import MoviesCard from './MoviesCard'

export class moviesContainer extends Component {
    render() {
        const {movies} = this.props
        let content = ''

        content = movies.Response == "True"
                        ? movies.Search.map((movie, index) => {
                            return <MoviesCard movie={movie} key={index} />
                        })
                        : <ErrorMessage />

        return (
            <div className="moviesContainer">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(moviesContainer)
