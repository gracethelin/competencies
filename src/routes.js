import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Auth from './Components/Auth/Auth'

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path ='/Movies' component={Movies} />
        <Route path='/SavedRecipes' component={SavedRecipes}/>
       
    </Switch>
)