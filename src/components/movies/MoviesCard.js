import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class MoviesCard extends Component {
    render() {
        const {movie} = this.props
        return (
                <div className='moviesCard'>
                <div className="movieCard">
                    <img src={movie.Poster} alt="movie cover" className="cardImage" />
                    <div className="movieTitle">
                        <h5>{movie.Title}</h5>
                        <h5>{movie.Year}</h5>
                    </div>
                    <Link className="cardLink" to={'/movie/' + movie.imdbID}>
                        Movie Details
                    </Link>
                </div>
                </div>
        )
    }
}

export default MoviesCard
