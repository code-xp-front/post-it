import Nota from './nota.js';


class ListaNotas {
    constructor(observador) {
        this._listaInterna = [];
        this._observador = observador;
    }

    adiciona(titulo, texto) {
        const nota = new Nota(this._listaInterna.length, titulo, texto);
        this._listaInterna = [nota].concat(this._listaInterna);
        this._observador(this);
    }

    remove(posicao) {
        this._listaInterna = this._listaInterna.filter(nota => nota.posicao !== posicao);
        this._observador(this);
    }

    edita(posicao) {
        this._listaInterna = this._listaInterna.map(nota => {
            if (nota.posicao === posicao) {
                return new Nota(nota.posicao, nota.titulo, nota.texto, true);
            } else {
                return nota;
            }
        });
        this._observador(this);
    }

    salva(posicao, titulo, texto) {
        this._listaInterna = this._listaInterna.map(nota => {
            if (nota.posicao === posicao) {
                return new Nota(posicao, titulo, texto, false);
            } else {
                return nota;
            }
        })
        this._observador(this);
    }

    pega(posicao) {
        return this._listaInterna[posicao];
    }

    pegaTodas() {
        return this._listaInterna;
    }
};

export default ListaNotas;