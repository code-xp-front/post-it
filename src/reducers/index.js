import { combineReducers  } from 'redux'
import {
    ADICIONA_NOTA,
    REMOVE_NOTA,
    HABILITA_EDICAO,
    ALTERA_NOTA,
    LOGA_USUARIO,
    DESLOGA_USUARIO,
} from '../actions'
import Nota from '../nota'


function usuario(estadoAtual = false, acao) {
    switch(acao.type) {
        case LOGA_USUARIO:
            return true
        case DESLOGA_USUARIO:
            return false
        default:
            return estadoAtual
    }
}

function notas(estadoAtual = [], acao) {
    switch(acao.type) {
        case ADICIONA_NOTA:
            const novaNota = new Nota(acao.titulo, acao.texto)
            return estadoAtual.concat(novaNota)
        case REMOVE_NOTA:
            return estadoAtual.filter((notaAtual, posicao) => posicao !== acao.posicao)
        case HABILITA_EDICAO:
            return estadoAtual.map((notaAtual, posicao) => {
                if (posicao === acao.posicao) {
                    return new Nota(notaAtual.titulo, notaAtual.texto, true)
                } else {
                    return notaAtual
                }
            })
        case ALTERA_NOTA:
            return estadoAtual.map((notaAtual, posicao) => {
                if (posicao === acao.posicao) {
                    return new Nota(acao.titulo, acao.texto, false)
                } else {
                    return notaAtual
                }
            })
        default:
            return estadoAtual
    }
}

const reducer = combineReducers({
    usuario,
    notas
})
   
export default reducer