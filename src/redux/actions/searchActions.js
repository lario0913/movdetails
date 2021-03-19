import axios from 'axios'
import {SEARCH_MOVIE, FETCH_MOVIES} from './types'


export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = text => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=a82438f4&s=${text}`)
        .then(res => dispatch({
            type: FETCH_MOVIES,
            payload: res.data.Search
        }))
        .catch(err => console.log(err))
}