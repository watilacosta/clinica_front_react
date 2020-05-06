const ACTIONS = {
  LISTAR: 'FUNCIONARIOS_LISTA',
}

const ESTADO_INICIAL = {
  tarefas: []
}

export const funcionariosReducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case ACTIONS.LISTAR:
      return {...state, funcionarios: action.funcionarios}
    default:
      return state
  }
}