import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {favoritesReducer} from './FavoritesReducer'
import { recepiesReducer } from './RecepiesReducer'



const rootReducer = combineReducers({
    recepies: recepiesReducer,
    favorites: favoritesReducer
})
//create store by combining the reducers
const Store = createStore(rootReducer, applyMiddleware(logger, thunk))

console.log(Store)
console.log(Store.getState())

//export store object to be used in the react compnents

export default Store