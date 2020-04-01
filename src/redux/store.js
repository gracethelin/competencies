import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './userReducer'

console.log(userReducer)


export default createStore(userReducer, applyMiddleware(promiseMiddleware))

// export default createStore(rootReducer, applyMiddleware(promiseMiddleware))