import React from 'react'
import Store from '../redux/Store.js'
import {addItemToFavorites, RemoveItemFromFavorites} from '../redux/FavoritesActions'



export default class SingleRecipie extends React.Component {
    addToFavorites = () =>{
        Store.dispatch(addItemToFavorites(
            {
            key: this.props.id,
            description: this.props.description
            }
            ))
    }
    
    RemoveFromFavorites = () => {
        Store.dispatch(RemoveItemFromFavorites(this.props.id))
    }

    render () {
        let button = null
        if (this.props.action === 'add'){
            button =  <button className = 'btn btn-success' onClick={this.addToFavorites}>
            Add To Favourites</button>
        } else {
            button = <button className = 'btn btn-success remove' onClick={this.RemoveFromFavorites}>
            Remove From Favorites Favourites</button>

        }
        

        return<div className='flex-item'>
        
        <div id='tuna'> {this.props.description}</div>  
        {button}
 
         </div>

    }
}

