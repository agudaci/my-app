import React from 'react'

export default class SingleRecipie extends React.Component {
    
    
    render () {
        return<div className='flex-item'>
        <div id='tuna'> {this.props.description}</div>  
     <button className = 'btn btn-success'>Add To Favourites</button>
 
         </div>

    }
}