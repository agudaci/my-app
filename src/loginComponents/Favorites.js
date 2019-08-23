import React from 'react'
import { connect } from 'react-redux'

const Favorites = () => {
    return <div>Test</div>
}

function mapStateToProps (state) {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps)(Favorites)