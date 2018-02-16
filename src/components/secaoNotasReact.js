import React from 'react'
import Section from './sectionReact'
import FormNotas from './FormNotasReact'


createFormNotas = (adicionarNota, excluirNota, editarNota, listaNotas, index) => {

    const props = {
        notaAtual: listaNotas.pega(index), 
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

    const children = [];


    for (var index = 0; index < listaNotas.contaTotal(); index++) {
        
        let formNotas = createFormNotas(adicionarNota, excluirNota, editarNota, listaNotas, index);

        children.push(formNotas);
    }

    return React.createElement(Section, props, children);

}

export default SecaoNotas;