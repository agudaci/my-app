import React from 'react'
import SingleRecipie from './SingleRecipies.js'
import { connect } from 'react-redux'


const Favorites = (props) => {
    let emptyList = ''
    const components = props.favorites.recepies.map((element) => {
        return <SingleRecipie 
        action = 'remove'
        description = {element.description} 
        id = {element.key}
        key={element.key}
        />})
      if (components.length < 1){
          emptyList = "You have no favorites recipies"
      }

    return <div>{components}
                {emptyList}   
    </div>
}
    
function mapStateToProps (state) {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps)(Favorites)