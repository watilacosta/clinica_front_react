import { combineReducers } from 'redux'

import { funcionariosReducer } from './FuncionariosReducer'

const mainReducer = combineReducers({
  funcionarios: funcionariosReducer
})

export default mainReducer