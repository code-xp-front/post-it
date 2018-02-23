import { 
  ADD_NOTE,
  REMOVE_NOTE,
  EDIT_NOTE,
  SAVE_NOTE
} from './actions'

import Nota from './Nota'


const initialState = {
  listaNotas: []
}

export default function postitApp(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      let novaNota = new Nota(action.titulo, action.texto);

      return { listaNotas: state.listaNotas.concat(novaNota) };
      // array concat

    case REMOVE_NOTE:

      return {
        listaNotas: state.listaNotas.filter((notaAtual, index) => {
          return index !== action.index
        })
      };
      // filter pra retirar nota

    case EDIT_NOTE:
      
      return {
        listaNotas: state.listaNotas.map( (notaAtual, index) => {
          if (index === action.index) {
            return new Nota(notaAtual.titulo, notaAtual.texto, true);
          } else {
            return notaAtual
          }}
        )
      };
      // map pra pegar index

    case SAVE_NOTE:

      return {
        listaNotas: state.listaNotas.map( (notaAtual, index) => {
          if (index === action.index) {
            return new Nota(action.titulo, action.texto, false);
          } else {
            return notaAtual
          }}
        )
      };
      // map pra pegar index

    default:
      return state
  }
}

// https://redux.js.org/basics/reducers


      // return Object.assign({}, state, {
      //   adicionarNota: listaNotas.push(),
      //   listaNotas: [
      //     action.titulo,
      //     action.texto,
      //     action.editando = false
      //   ]
      // })
