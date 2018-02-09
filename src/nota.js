export default class Nota {
    constructor(posicao, titulo, texto, editando = false) {
        this._posicao = posicao;
        this._titulo = titulo;
        this._texto = texto;
        this._editando = editando;
    }

    get posicao() {
        return this._posicao;
    }

    set posicao(posicao) {
        this._posicao = posicao;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(titulo) {
        this._titulo = titulo;
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }

    get editando() {
        return this._editando;
    }

    set editando(editando) {
        this._editando = editando;
    }
}