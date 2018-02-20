export default class Nota {
    constructor(novaPosicao, novoTitulo, novoTexto, novoEditando = false) {
        this._posicao = novaPosicao
        this._titulo = novoTitulo
        this._texto = novoTexto
        this._editando = novoEditando
    }

    get posicao() {
        return this._posicao
    }

    set posicao(novoPosicao) {
        this._posicao = novoPosicao
    }

    get titulo() {
        return this._titulo
    }

    set titulo(novoTitulo) {
        this._titulo = novoTitulo
    }

    get texto() {
        return this._texto
    }

    set texto(novoTexto) {
        this._texto = novoTexto
    }

    get editando() {
        return this._editando
    }

    set editando(novoEditando) {
        this._editando = novoEditando
    }

    estaCadastrando() {
        return this.posicao === undefined;
    }

    estaVisualizando() {
        return this.posicao !== undefined && !this.editando
    }

    estaAlterando() {
        return this.posicao !== undefined && this.editando
    }
}