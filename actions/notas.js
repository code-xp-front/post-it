import { getNotes, postNote, putNote, deleteNote } from '../api/notes'

export const LISTA_NOTAS = 'LISTA_NOTAS'
export const ADICIONA_NOTA = 'ADICIONA_NOTA'
export const REMOVE_NOTA = 'REMOVE_NOTA'
export const HABILITA_EDICAO = 'HABILITA_EDICAO'
export const ALTERA_NOTA = 'ALTERA_NOTA'


export function listaNotas() {
    return dispatch => {
        getNotes()
            .then(response => dispatch({
                type: LISTA_NOTAS, 
                lista: response.data.notas
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function adicionaNota(titulo, texto) {
    return dispatch => {
        postNote(titulo, texto)
            .then(response => dispatch({
                type: ADICIONA_NOTA, 
                titulo, 
                texto,
                posicao: response.data.posicao
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function removeNota(posicao) {
    return dispatch => {
        deleteNote(posicao)
            .then(() => dispatch({
                type: REMOVE_NOTA, 
                posicao
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    } 
}

export function habilitaEdicao(posicao) {
    return {
        type: HABILITA_EDICAO,
        posicao
    }
}

export function alteraNota(posicao, titulo, texto) {
    return dispatch => {
        putNote(posicao, titulo, texto)
            .then(() => dispatch({
                type: ALTERA_NOTA,
                posicao,
                titulo,
                texto
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}