import React from 'react'
import Nota from '../nota'
import ListaNotas from '../listaNotas'
import FormNotas from './formNotas'
import SectionNotas from './sectionNotas'


function montaFormNotas(adicionarNota, removerNota, editarFormulario) {
    const props = {
        notaAtual: new Nota(undefined, '', ''), 
        adicionarNota, 
        removerNota, 
        editarFormulario
    }

    return <FormNotas {...props} />
}

function montaSectionNotas(listaNotas, adicionarNota, removerNota, editarFormulario) {
    const props = {
        listaNotas, 
        adicionarNota, 
        removerNota, 
        editarFormulario
    }

    return <SectionNotas {...props} />
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

    adicionarNota(titulo, texto, posicao) {
        if (this.state.listaNotas.pega(posicao)) {
            this.state.listaNotas.salva(posicao, titulo, texto)
        } else {
            this.state.listaNotas.adiciona(titulo, texto)
        }
    }

    removerNota(posicao) {
        this.state.listaNotas.remove(posicao)
    }

    editarFormulario(posicao) {
        this.state.listaNotas.edita(posicao)
    }

    render() {
        const { state, adicionarNota, removerNota, editarFormulario } = this
        const { listaNotas } = state
        const props = { className: 'container' }

        let formNotas = montaFormNotas(adicionarNota, removerNota, editarFormulario)
        let sectionNotas = montaSectionNotas(listaNotas, adicionarNota, removerNota, editarFormulario)

        return (
            <main {...props}>
                {formNotas}
                {sectionNotas}
            </main>
        )
    }
}

export default Page