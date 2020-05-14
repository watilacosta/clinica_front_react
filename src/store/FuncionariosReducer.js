import Api from "../services/api"

const ACTIONS = {
  LISTAR: 'FUNCIONARIOS_LISTA',
  SALVAR: 'FUNCIONARIO_SALVAR',
  EXCLUIR: 'FUNCIONARIOS_EXCLUIR',
  EDITAR: 'FUNCIONARIO_EDITAR'
}

const ESTADO_INICIAL = {
  funcionarios: []
}

export const funcionariosReducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case ACTIONS.LISTAR:
      return {...state, funcionarios: action.funcionarios}
    case ACTIONS.SALVAR:
      return {...state, funcionarios: [...state.funcionarios, action.funcionario]}
    case ACTIONS.EDITAR:
      return {...state, funcionarios: [...state.funcionarios, action.funcionario]}
    case ACTIONS.EXCLUIR:
      const funcionarios = state.funcionarios.filter(funcionario => funcionario.id !== action.id)
      return {...state, funcionarios: funcionarios}
    default:
      return state
  }
}

export function listar() {
  return dispatch => {
    Api.get("/funcionarios").then(response => {
      dispatch({
        type: ACTIONS.LISTAR,
        funcionarios: response.data
      })
    }).catch(error => {
      alert(error)
    })
  }
}

export function salvar(funcionario) {
  return dispatch => {
    Api.post("/funcionarios", funcionario).then(response => {
      dispatch({
        type: ACTIONS.SALVAR,
        funcionario: response.data
      })
    }).catch(error => {
      alert(error)
    })
  }
}

export function excluir(id) {
  return dispatch => {
    Api.delete(`/funcionarios/${id}`).then(response => {
      dispatch({
        type: ACTIONS.EXCLUIR,
        id: id
      })
    }).catch(error => {
      alert(error)
    })
  }
}

export function editar(funcionario) {
  return dispatch => {
    Api.put(`/funcionarios/${funcionario.id}`).then(response => {
      dispatch({
        type: ACTIONS.EDITAR,
        funcionario: response.data
      })
    })
  }
}