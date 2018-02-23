import React from 'react'
import Section from './sectionReact'
import FormNotas from './FormNotasReact'


const createFormNotas = (adicionarNota, excluirNota, editarNota, notaAtual, index) => {

    const props = {
        notaAtual,
        key: index,
        index,
        adicionarNota,
        excluirNota,
        editarNota
    }

    // return React.createElement(FormNotas, props)
    return (
        <FormNotas {...props} />
    )

}


function SecaoNotas({ listaNotas, adicionarNota, excluirNota, editarNota }) {

    // let secao = React.getElementsByClassName('notes')[0];

    const props = { className: 'notes' };

    // return React.createElement(Section, props, children);
    return (
        <Section {...props}>
            {listaNotas.map((notaAtual, index) => (
                createFormNotas(adicionarNota, excluirNota, editarNota, notaAtual, index)
            ))}
        </Section>
    )

}

export default SecaoNotas;


// for (var index = 0; index < listaNotas.contaTotal(); index++) {

//         let formNotas = createFormNotas(adicionarNota, excluirNota, editarNota, listaNotas, index);

//         children.push(formNotas);
//     }