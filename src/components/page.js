import React from 'react'
import Nota from '../nota'
import ListaNotas from '../listaNotas'
import FormNotas from './formNotas'
import SectionNotas from './sectionNotas'


function montaFormNotas(adicionarNota, removerNota, editarFormulario) {
    const props = {
        notaAtual: new Nota('', ''), 
        adicionarNota, 
        removerNota, 
        editarFormulario
    }

    return React.createElement(FormNotas, props)
}

function montaSectionNotas(listaNotas, adicionarNota, removerNota, editarFormulario) {
    const props = {
        listaNotas, 
        adicionarNota, 
        removerNota, 
        editarFormulario
    }

    return React.createElement(SectionNotas, props)
}

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.atualizaPagina = this.atualizaPagina.bind(this);
        this.adicionarNota = this.adicionarNota.bind(this);
        this.removerNota = this.removerNota.bind(this);
        this.editarFormulario = this.editarFormulario.bind(this);
        this.state = { listaNotas: new ListaNotas(this.atualizaPagina) }
    }

    atualizaPagina(novaLista) {
        this.setState({ listaNotas: novaLista })
    }

    adicionarNota(titulo, texto, formulario, posicao) {
        if (this.state.listaNotas.pega(posicao)) {
            this.state.listaNotas.salva(posicao, titulo, texto)
        } else {
            this.state.listaNotas.adiciona(titulo, texto)
            formulario.reset()
        }
    }

    removerNota(evento, posicao) {
        evento.stopPropagation()
        this.state.listaNotas.remove(posicao)
    }

    editarFormulario(posicao) {
        this.state.listaNotas.edita(posicao)
    }

    render() {
        const props = { className: 'container' }

        let formNotas = montaFormNotas(this.adicionarNota, this.removerNota, this.editarFormulario)
        let sectionNotas = montaSectionNotas(this.state.listaNotas, this.adicionarNota, this.removerNota, this.editarFormulario)
        const children = [formNotas, sectionNotas]

        return React.createElement('main', props, ...children)
    }
}

export default Page