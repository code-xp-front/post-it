import instance from './instance'


export function postNote(titulo, texto) {
    return instance.post('/notes', { titulo, texto })
}

export function getNotes() {
    return instance.get('/notes')
}

export function getNoteByPosicao(posicao) {
    return instance.get('/notes/' + posicao)
}

export function putNote(posicao, titulo, texto) {
    return instance.put('/notes/' + posicao, { titulo, texto })
}

export function deleteNote(posicao) {
    return instance.delete('/notes/' + posicao)
}