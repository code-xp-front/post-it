import { 
  ADD_NOTE,
  REMOVE_NOTE,
  EDIT_NOTE,
  SAVE_NOTE,
  adicionarNota, 
  removerNota, 
  editarNota, 
  salvarNota 
} from './actions'

import NovaLista from './src/ClasseNovaLista'

const initialState = {
  adicionarNota,
  listaNotas: []
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return Object.assign({}, state, {
        adicionarNota: listaNotas.push(),
        listaNotas: [
          action.titulo,
          action.texto,
          action.editando = false
        ]
      })
    case REMOVE_NOTE:
      return Object.assign({}, state, {
        removerNota
      })
    case EDIT_NOTE:
      return Object.assign({}, state, {
        editarNota
      })
    case SAVE_NOTE:
      return Object.assign({}, state, {
        salvarNota
      })
    default:
      return state
  }
}

// https://redux.js.org/basics/reducers