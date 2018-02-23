export const ADICIONA_NOTA = 'ADICIONA_NOTA'
export const REMOVE_NOTA = 'REMOVE_NOTA'
export const HABILITA_EDICAO = 'HABILITA_EDICAO'
export const ALTERA_NOTA = 'ALTERA_NOTA'

export function adicionaNota(titulo, texto) {
    return {
        type: ADICIONA_NOTA,
        titulo,
        texto
    }
}

export function removeNota(posicao) {
    return {
        type: REMOVE_NOTA,
        posicao
    }
}

export function habilitaEdicao(posicao) {
    return {
        type: HABILITA_EDICAO,
        posicao
    }
}

export function alteraNota(posicao, titulo, texto) {
    return {
        type: ALTERA_NOTA,
        posicao,
        titulo,
        texto
    }
}