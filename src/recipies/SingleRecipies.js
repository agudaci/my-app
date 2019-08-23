import React from 'react'
import Store from '../redux/Store.js'
import {addItemToFavorites} from '../redux/FavoritesActions'

export default class SingleRecipie extends React.Component {
    addToFavorites = () =>{
        Store.dispatch(addItemToFavorites(this.props.description))
    }
    
    render () {
        return<div className='flex-item'>
        <div id='tuna'> {this.props.description}</div>  
     <button className = 'btn btn-success' onClick={this.addToFavorites}>
         Add To Favourites</button>
 
         </div>

    }
}