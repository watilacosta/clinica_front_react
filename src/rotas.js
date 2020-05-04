import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'
import Inicio from './Views/Inicio'
import Agendamentos from './Views/Agendamentos'
import FormLogin from './Views/FormLogin'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props => isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: "/", state: { from: props.location }}} />
    )
  } />
)

const Rotas = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={!isAuthenticated() ? FormLogin : Inicio} />
      <PrivateRoute path="/app" component={Inicio} />
      <PrivateRoute path="/agendamentos" component={Agendamentos} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Rotas