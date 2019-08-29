import React from 'react'
import { connect } from 'react-redux'
import Store from '../redux/Store'
import { fetchRecepies } from '../redux/FetchRecepies.js'
import './recipies.css'
import SingleRecipie from './SingleRecipies.js';






class Reciepes extends React.Component {
    componentWillMount ( ){
        Store.dispatch(fetchRecepies())
    }
    render () {
        const components = this.props.recepies.map((element) => {
            return <SingleRecipie 
            action = 'add'
            description = {element.title} 
            id={element.id}
            key={element.id}/>
        })

        if (this.props.isBusy) {
            return <div>Loading ... </div>
        } else {
            return <div id = 'recepies' className = 'flex-container'>
        
            {components}

            </div>
        }
        
    
    }
    
}

function mapStateToProps (state) {
    return {
        recepies: state.recepies.recepies,
        isBusy: state.recepies.isBusy
    }
}
export default connect(mapStateToProps)(Reciepes)