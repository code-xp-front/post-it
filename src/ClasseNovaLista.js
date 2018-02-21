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
        this._observador(this);

    }

    editar(index) {

        this._listaNotas[index].editando = true;
        this._observador(this);

    }

    remover(index) {

        this._listaNotas.splice(index, 1);
        this._observador(this);

    }

    salvar(index, novoTitulo, novoTexto) {

        this._listaNotas[index].titulo = novoTitulo;
        this._listaNotas[index].texto = novoTexto;
        this._listaNotas[index].editando = false;

        this._observador(this);

    }

    pegar(index) {
        return this._listaNotas[index]
    }

    pegarTodos() {
        return this._listaNotas
    }

    contaTotal() {
        return this._listaNotas.length
    }
};

export default NovaLista;