import React from 'react'
import Home from './Home.js'
import Menu from './Menu'

import { BrowserRouter as Router, Route }
 from "react-router-dom";

const Routes = () => {
    return (
        <Router>
            <Menu />


            <Route path='/' component={null} />
            <Route path='/Login' component={Home} />
        </Router>
    )

    
}

export default Routes