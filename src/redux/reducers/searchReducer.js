import {SEARCH_MOVIE} from '../actions/types'

initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
}

const searchReducer = (state=initialState, action) => {
    switch(action.type){
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default searchReducer