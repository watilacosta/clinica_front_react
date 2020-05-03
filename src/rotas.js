import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Views/Home'
import Agendamentos from './Views/Agendamentos'
import FormLogin from './Views/FormLogin'

export default () => {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/agendamentos" component={Agendamentos} />
      <Route exact path="/login" component={FormLogin} />
    </Switch>
  )
}