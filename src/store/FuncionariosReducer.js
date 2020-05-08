import Api from "../services/api"

const ACTIONS = {
  LISTAR: 'FUNCIONARIOS_LISTA',
  SALVAR: 'FUNCIONARIO_SALVAR',
}

const ESTADO_INICIAL = {
  funcionarios: []
}

export const funcionariosReducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case ACTIONS.LISTAR:
      return {...state, funcionarios: action.funcionarios}
    case ACTIONS.SALVAR:
      return {...state, funcionarios: [...state.funcionarios, action.funcionarios]}
    default:
      return state
  }
}

export const listar = () => {
  return dispatch => {
    Api.get("/funcionarios").then(response => {
      dispatch({
        type: ACTIONS.LISTAR,
        funcionarios: response.data
      })
    }).catch(error => {
      console.log(error)
    })
  }
}

export const salvar = (funcionario) => {
  return dispatch => {
    Api.post("/funcionarios", funcionario).then(response => {
      dispatch({
        type: ACTIONS.SALVAR,
        funcionario: response.data
      })
    })
  }
}