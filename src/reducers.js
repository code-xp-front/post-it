import {
    ADICIONA_NOTA,
    REMOVE_NOTA,
    HABILITA_EDICAO,
    ALTERA_NOTA
} from './actions'
import Nota from './nota'


const estadoInicial = {
    notas: []
}

export default function redutor(estadoAtual = estadoInicial, acao) {
    switch(acao.type) {
        case ADICIONA_NOTA:
            const novaNota = new Nota(acao.titulo, acao.texto)

            return {
                notas: estadoAtual.notas.concat(novaNota)
            }
        case REMOVE_NOTA:
            return {
                notas: estadoAtual.notas.filter((notaAtual, posicao) => posicao !== acao.posicao)
            }
        case HABILITA_EDICAO:
            return {
                notas: estadoAtual.notas.map((notaAtual, posicao) => {
                    if (posicao === acao.posicao) {
                        return new Nota(notaAtual.titulo, notaAtual.texto, true)
                    } else {
                        return notaAtual
                    }
                })
            }
        case ALTERA_NOTA:
            return {
                notas: estadoAtual.notas.map((notaAtual, posicao) => {
                    if (posicao === acao.posicao) {
                        return new Nota(acao.titulo, acao.texto, false)
                    } else {
                        return notaAtual
                    }
                })
            }
        default:
            return estadoAtual
    }
}