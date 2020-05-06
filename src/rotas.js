import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'
import Home from './Views/Home'
import Agendamentos from './components/Agendamentos'
import FormLogin from './components/FormLogin'
import Funcionarios from './components/Funcionarios'

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
      <Route exact path="/" component={!isAuthenticated() ? FormLogin : Home} />
      <PrivateRoute path="/agendamentos" component={Agendamentos} />
      <PrivateRoute path="/funcionarios" component={Funcionarios} />
      <Route path="*" component={() => <h1>Esta página não existe!</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Rotas