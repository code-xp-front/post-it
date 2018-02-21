import React from 'react'
import SectionNotas from './secaoNotasReact'
import FormNotas from './FormNotasReact'
import Nota from '../Nota'
import NovaLista from '../ClasseNovaLista'



// let secao = document.getElementsByClassName('notes')[0];


// const listaNotas = new NovaLista(observaMudancasNaLista);


const montaFormNotas = (adicionarNota, excluirNota, editarNota) => {

    const props = {
        key: 'form-note',
        notaAtual: new Nota('', ''),
        adicionarNota, // == IGUAL adicionarNota: adicionarNota
        excluirNota,
        editarNota
    }

    return React.createElement(FormNotas, props)
}

const montaSecaoNotas = (listaNotas, adicionarNota, excluirNota, editarNota) => {

    const props = {
        key: 'section-notes',
        listaNotas,
        adicionarNota,
        excluirNota,
        editarNota
    }

    return React.createElement(SectionNotas, props)
}


class Page extends React.Component {

    constructor(props) {
        super(props)

        this.atualizaPagina = this.atualizaPagina.bind(this)
        this.adicionarNota = this.adicionarNota.bind(this)
        this.editarNota = this.editarNota.bind(this)
        this.excluirNota = this.excluirNota.bind(this)

        this.state = {
            listaNotas: new NovaLista(this.atualizaPagina)
        }
    }

    atualizaPagina(novaLista) {
        console.log('quem é this' + this)
        this.setState({
            listaNotas: novaLista
        })
    }

    editarNota(index) {
        this.state.listaNotas.editar(index)
    }

    adicionarNota(titulo, texto, formulario, index) {

        if (this.state.listaNotas.pegar(index)) {
            this.state.listaNotas.salvar(index, titulo, texto);
        } else {
            this.state.listaNotas.adicionar(titulo, texto);
            formulario.reset();
        }
    }

    excluirNota(evento, index) {
        evento.stopPropagation();
        this.state.listaNotas.remover(index);
    }


    render() {

        const props = { className: 'container' }

        let formNotas = montaFormNotas(this.adicionarNota, this.excluirNota, this.editarNota)
        let secaoNotas = montaSecaoNotas(this.state.listaNotas, this.adicionarNota, this.excluirNota, this.editarNota)

        const children = [formNotas, secaoNotas]

        return React.createElement('main', props, children)

    }
}

export default Page;

// ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥