import {
    LISTA_NOTAS,
    ADICIONA_NOTA,
    REMOVE_NOTA,
    HABILITA_EDICAO,
    ALTERA_NOTA
} from '../actions'
import Nota from '../nota'


export function notas(estadoAtual = [], acao) {
    switch(acao.type) {
        case LISTA_NOTAS:
            return acao.lista.map(({ posicao, titulo, texto}) => {
                return new Nota(posicao, titulo, texto)
            })
        case ADICIONA_NOTA:
            const novaNota = new Nota(acao.posicao, acao.titulo, acao.texto)
            return estadoAtual.concat(novaNota)
        case REMOVE_NOTA:
            return estadoAtual.filter(notaAtual => notaAtual.posicao !== acao.posicao)
        case HABILITA_EDICAO:
            return estadoAtual.map(notaAtual => {
                if (notaAtual.posicao === acao.posicao) {
                    return new Nota(notaAtual.posicao, notaAtual.titulo, notaAtual.texto, true)
                } else {
                    return notaAtual
                }
            })
        case ALTERA_NOTA:
            return estadoAtual.map(notaAtual => {
                if (notaAtual.posicao === acao.posicao) {
                    return new Nota(acao.posicao, acao.titulo, acao.texto, false)
                } else {
                    return notaAtual
                }
            })
        default:
            return estadoAtual
    }
}