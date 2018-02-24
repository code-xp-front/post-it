export const ADICIONA_NOTA = 'ADICIONA_NOTA'
export const REMOVE_NOTA = 'REMOVE_NOTA'
export const HABILITA_EDICAO = 'HABILITA_EDICAO'
export const ALTERA_NOTA = 'ALTERA_NOTA'
export const LOGA_USUARIO = 'LOGA_USUARIO'
export const DESLOGA_USUARIO = 'DESLOGA_USUARIO'


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

export function logaUsuario() {
    return {
        type: LOGA_USUARIO
    }
}

export function deslogaUsuario() {
    return {
        type: DESLOGA_USUARIO,
    }
}