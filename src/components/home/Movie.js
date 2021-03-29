import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchMovie} from '../../redux/actions/searchActions'


export class Movie extends Component {
    // componentDidMount(){
    //     this.props.fetchMovie(this.props.match.params.id)
    // }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <img src="#poster" className="movieImage" alt="Poster" />
                    </div>
                    <div>
                        <h2 className="movieTitle">Movie Title</h2>
                        <ul>
                            <li>
                                <strong>Genre: </strong> Movie Genre
                            </li>
                            <li>
                                <strong>Released: </strong> Movie Released
                            </li>
                            <li>
                                <strong>Rated: </strong> Movie Rated
                            </li>
                            <li>
                                <strong>IMDB Rating: </strong> Movie IMDB Rating
                            </li>
                            <li>
                                <strong>Director: </strong> Movie Director
                            </li>
                            <li>
                                <strong>Writer: </strong> Movie Writer
                            </li>
                            <li>
                                <strong>Actors: </strong> Movie Actors
                            </li>
                        </ul>
                    </div>
                </div>
            
                <div>
                    <h3>About</h3>
                    <p>About the movie</p>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        View on IMDB
                    </a>
                    <a>
                        Go Back To Search
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(mapStateToProps, {fetchMovie})(Movie)
