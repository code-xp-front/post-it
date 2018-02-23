import { 
  ADD_NOTE,
  REMOVE_NOTE,
  EDIT_NOTE,
  SAVE_NOTE
} from './actions'

import NovaLista from './src/ClasseNovaLista'

const initialState = {
  listaNotas: []
}

function postitApp(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      let novaNota = new Nota(action.titulo, action.texto);

      const newState = {
        listaNotas: state.listaNotas.concat(novaNota)
      }
      return newState;
      // array concat

      // return Object.assign({}, state, {
      //   adicionarNota: listaNotas.push(),
      //   listaNotas: [
      //     action.titulo,
      //     action.texto,
      //     action.editando = false
      //   ]
      // })

    case REMOVE_NOTE:
      // const listaMenosNota = listaNotas.splice(index, 1);

      const newState = {
        listaNotas: state.listaNotas.filter((notaAtual, index) => {
          return index !== action.index
        })
      }
      return newState;
      // filter pra retirar nota

      // return Object.assign({}, state, {
      //   removerNota
      // })

    case EDIT_NOTE:
      const newState = {
        listaNotas: state.listaNotas.map( (notaAtual, index) => {
          if (index === action.index) {
            return new Nota(notaAtual.titulo, notaAtual.texto, true);
          } else {
            return notaAtual
          }}
        )
      }
      
      return newState;
      // map pra pegar index

      // return Object.assign({}, state, {
      //   editarNota
      // })

    case SAVE_NOTE:
      const newState = {
        listaNotas: state.listaNotas.map( (notaAtual, index) => {
          if (index === action.index) {
            return new Nota(action.titulo, action.texto, false);
          } else {
            return notaAtual
          }}
        )
      }
      return newState;
      // map pra pegar index

      // return Object.assign({}, state, {
      //   salvarNota
      // })
    default:
      return state
  }
}

// https://redux.js.org/basics/reducers