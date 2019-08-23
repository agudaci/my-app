import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {favoritesReducer} from './FavoritesReducer'



const rootReducer = combineReducers({
    favorites: favoritesReducer
})
//create store by combining the reducers
const Store = createStore(rootReducer, applyMiddleware(logger, thunk))

console.log(Store)
console.log(Store.getState())

//export store object to be used in the react compnents

export default Store