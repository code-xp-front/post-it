import Nota from './nota.js'


class ListaNotas {
    constructor(observador) {
        this._listaInterna = []
        this._observador = observador
    }

    adiciona(novoTitulo, novoTexto) {
        let nota = new Nota(this._listaInterna.length, novoTitulo, novoTexto)
        this._listaInterna = this._listaInterna.concat(nota)
        this._observador(this)
    }

    remove(posicao) {
        this._listaInterna = this._listaInterna.filter(nota => nota.posicao !== posicao)
        this._observador(this)
    }

    edita(posicao) {
        this._listaInterna = this._listaInterna.map(nota => {
            if (nota.posicao === posicao) {
                return new Nota(posicao, nota.titulo, nota.texto, true)
            } else {
                return nota
            }
        })
        this._observador(this)
    }

    salva(posicao, novoTitulo, novoTexto) {
        this._listaInterna = this._listaInterna.map(nota => {
            if (nota.posicao === posicao) {
                return new Nota(posicao, novoTitulo, novoTexto, false)
            } else {
                return nota
            }
        })
        this._observador(this)
    }

    pega(posicao) {
        return this._listaInterna[posicao]
    }

    pegaTodos() {
        return this._listaInterna
    }

    contaTotal() {
        return this._listaInterna.length
    }
};

export default ListaNotas