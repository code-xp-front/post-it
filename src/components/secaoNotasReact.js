import React from 'react'
import Section from './sectionReact'
import FormNotas from './FormNotasReact'


const createFormNotas = (adicionarNota, excluirNota, editarNota, listaNotas, index) => {

    const props = {
        key: index,
        notaAtual: listaNotas.pegar(index), 
        index: index, 
        adicionarNota: adicionarNota, 
        excluirNota: excluirNota, 
        editarNota: editarNota
    }
    
    return React.createElement(FormNotas, props)
}


function SecaoNotas ( { listaNotas, adicionarNota, excluirNota, editarNota } ) {

    // let secao = React.getElementsByClassName('notes')[0];

    const props = { className: 'notes' };

    const children = listaNotas.pegarTodos().map( (notaAtual, index) => (
        createFormNotas(adicionarNota, excluirNota, editarNota, listaNotas, index)
    ))

    return React.createElement(Section, props, children);

}

export default SecaoNotas;


// for (var index = 0; index < listaNotas.contaTotal(); index++) {
        
//         let formNotas = createFormNotas(adicionarNota, excluirNota, editarNota, listaNotas, index);

//         children.push(formNotas);
//     }