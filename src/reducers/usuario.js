import {
    LOGA_USUARIO,
    DESLOGA_USUARIO
} from '../actions'


export function usuario(estadoAtual = false, acao) {
    switch(acao.type) {
        case LOGA_USUARIO:
            return true
        case DESLOGA_USUARIO:
            return false
        default:
            return estadoAtual
    }
}