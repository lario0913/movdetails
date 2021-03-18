import {createStore, applyMiddleWare} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import rootReducer from './reducers'

const middleware = [thunk]
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleWare(...middleware))
)

export default store