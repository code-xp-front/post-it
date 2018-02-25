import React from 'react'
import Section from '../section'
import FormNotas from '../formNotas'
import './secaoNotas.css'


function SectionNotas({ listaNotas, adicionarNota, removerNota, editarFormulario }) {
    return (
        <Section className="notes">
            {listaNotas.map((notaAtual, posicao) => {
                const propsFormNotas = { notaAtual, adicionarNota, removerNota, editarFormulario }
                return <FormNotas key={posicao} {...propsFormNotas} />
            })}
        </Section>
    )
}

export default SectionNotas