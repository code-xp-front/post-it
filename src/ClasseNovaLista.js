import React from 'react'

import Nota from './Nota.js';

class NovaLista {
    constructor(observador) {
        this._listaNotas = [];
        this._observador = observador;
    }

    adicionar(novoTitulo, novoTexto) {

        let novaNota = new Nota(novoTitulo, novoTexto);

        this._listaNotas.push(novaNota);
        this._observador();

    }

    editar(index) {

        this._listaNotas[index].editando = true;
        this._observador();

    }

    remover(index) {

        this._listaNotas.splice(index, 1);
        this._observador();

    }

    salvar(index, novoTitulo, novoTexto) {

        this._listaNotas[index].titulo = novoTitulo;
        this._listaNotas[index].texto = novoTexto;
        this._listaNotas[index].editando = false;

        this._observador();

    }

    pegar(index) {
        return this._listaNotas[index]
    }
    contaTotal() {
        return this._listaNotas.length
    }
};

export default NovaLista;