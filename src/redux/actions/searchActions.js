import axios from 'axios'
import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING} from './types'


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

export const fetchMovie = id => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=a82438f4&i=${id}`)
        .then(res => dispatch({
            type: FETCH_MOVIE,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const setLoading = () => dispatch =>  {
    dispatch({
        type: LOADING
    })
}
