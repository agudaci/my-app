import React from 'react'
import Home from './Home.js'
import Menu from './Menu'
import Favorites from '../recipies/Favorites.js'
import Reciepes from '../recipies/Recipies.js';


import { BrowserRouter as Router, Route, Switch }
 from "react-router-dom";
import LoggedInAs from './LoggedInAs.js';

const Routes = () => {
    return (
        <Router>
            <Menu />

            <Switch>

            <Route exact path='/' component={Reciepes} />
            <Route exact path='/fav' component={Favorites} />
            <Route exact path='/login' component={Home} />
            <Route exact path='/about' component={LoggedInAs} />


            <Route exact component={PathError} />

            </Switch>

        </Router>
    )
}

export default Routes

const PathError = () => {
    return <h1> Error 404! Not found!</h1>
}