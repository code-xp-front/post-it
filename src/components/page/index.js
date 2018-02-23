import React from 'react'
import SectionNotas from '../secaoNotasReact'
import FormNotas from '../FormNotasReact'
import Nota from '../../Nota'
import NovaLista from '../../ClasseNovaLista'

import './page.css'


const montaFormNotas = (adicionarNota, excluirNota, editarNota) => {

    const props = {
        key: 'form-note',
        notaAtual: new Nota('', ''),
        adicionarNota, // == IGUAL adicionarNota: adicionarNota
        excluirNota,
        editarNota
    }

    // return React.createElement(FormNotas, props)
    return <FormNotas {...props} />
}

const montaSecaoNotas = (listaNotas, adicionarNota, excluirNota, editarNota) => {

    const props = {
        key: 'section-notes',
        listaNotas,
        adicionarNota,
        excluirNota,
        editarNota
    }

    // return React.createElement(SectionNotas, props)
    return <SectionNotas {...props} />
}


const Page = ({listaNotas, adicionarNota, excluirNota, editarNota}) => {


    const props = { className: 'container' }

    let formNotas = montaFormNotas(adicionarNota, excluirNota, editarNota)
    let secaoNotas = montaSecaoNotas(listaNotas, adicionarNota, excluirNota, editarNota)


    return (
        <main {...props}>
            {formNotas}
            {secaoNotas}
        </main>
    )

}

export default Page;

// ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥

// constructor(props) {
    //     super(props)

    //     this.atualizaPagina = this.atualizaPagina.bind(this)
    //     this.adicionarNota = this.adicionarNota.bind(this)
    //     this.editarNota = this.editarNota.bind(this)
    //     this.excluirNota = this.excluirNota.bind(this)

    //     this.state = {
    //         listaNotas: new NovaLista(this.atualizaPagina)
    //     }
    // }

// const atualizaPagina = (novaLista) => {
//         // console.log('quem é this' + this)
//         this.setState({
//             listaNotas: novaLista
//         })
//     }

// const editarNota = (index) => {
//         listaNotas.editar(index)
//     }

// const adicionarNota = (titulo, texto, formulario, index) => {

//         if (listaNotas.pegar(index)) {
//             listaNotas.salvar(index, titulo, texto);
//         } else {
//             listaNotas.adicionar(titulo, texto);
//             formulario.reset();
//         }
//     }

// const excluirNota = (evento, index) => {
//         evento.stopPropagation();
//         listaNotas.remover(index);
// }

