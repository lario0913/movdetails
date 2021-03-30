import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Spinner from '../spinner/Spinner'

import {fetchMovie, setLoading} from '../../redux/actions/searchActions'


class Movie extends Component {
    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading()
    }

    render() {
        const {loading, movie} = this.props

        const movieInfo = (
            <div>
                <div>
                    <div>
                        <img src={movie.Poster} className="movieImage" alt="Poster" />
                    </div>
                    <div>
                        <h2 className="movieMainTitle">{movie.Title}</h2>
                        <ul>
                            <li>
                                <strong>Genre: </strong> {movie.Genre}
                            </li>
                            <li>
                                <strong>Released: </strong> {movie.Released}
                            </li>
                            <li>
                                <strong>Rated: </strong> {movie.Rated}
                            </li>
                            <li>
                                <strong>IMDB Rating: </strong> {movie.imdbRating}
                            </li>
                            <li>
                                <strong>Director: </strong> {movie.Director}
                            </li>
                            <li>
                                <strong>Writer: </strong> {movie.Writer}
                            </li>
                            <li>
                                <strong>Actors: </strong> {movie.Actors}
                            </li>
                        </ul>
                    </div>
                </div>
            
                <div>
                    <h3>About</h3>
                    <p>{movie.Plot}</p>
                    <a
                        href={'https://www.imdb.com/title/' + movie.imdbID}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on IMDB
                    </a>
                    <Link to="/">
                        Go Back To Search
                    </Link>
                </div>
            </div>
        )

        const content = loading ? <Spinner /> : movieInfo

        return (
            <>
            {content}
            </>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(
    mapStateToProps, 
    {fetchMovie, setLoading}
    )
    (Movie)
