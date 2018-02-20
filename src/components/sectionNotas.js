import React from 'react'
import Section from './section'
import FormNotas from './formNotas'


function montaFormNotas(posicao, listaNotas, adicionarNota, removerNota, editarFormulario) {
    const props = {
        posicao: posicao,
        notaAtual: listaNotas.pega(posicao),
        removerNota: removerNota,
        adicionarNota: adicionarNota,
        editarFormulario: editarFormulario,
    }

    return React.createElement(FormNotas, props)
}

function SectionNotas({ listaNotas, adicionarNota, removerNota, editarFormulario }) {
    const props = { className: 'notes' }

    const children = listaNotas.pegaTodos().map((notaAtual, posicao) => (
        montaFormNotas(posicao, listaNotas, adicionarNota, removerNota, editarFormulario)
    ))

    return React.createElement(Section, props, ...children)
}

export default SectionNotas