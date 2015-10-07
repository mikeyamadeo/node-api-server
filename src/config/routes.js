import React from 'react'
import { Route } from 'react-router'
import App from '../App'
import Home from '../App/views/Home'
import TrainerDetails from '../App/views/TrainerDetails'

var routes = (
  <Route component={App} >
    <Route path='/' component={Home} />
    <Route path='/trainers/:id' component={TrainerDetails} />
  </Route>
)

export default routes
