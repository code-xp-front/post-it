import React from 'react'
import Nota from '../../nota'
import FormNotas from '../formNotas'
import SectionNotas from '../sectionNotas'
import './page.css'


function montaFormNotas(adicionarNota, removerNota, editarFormulario) {
    const props = {
        notaAtual: new Nota('', ''), 
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

function Page({ listaNotas, adicionarNota, removerNota, editarFormulario }) {
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

export default Page