import React from 'react'
import { connect } from 'react-redux'
import Nota from '../../nota'
import FormNotas from '../formNotas'
import SectionNotas from '../sectionNotas'
import { 
    adicionaNota, 
    removeNota, 
    habilitaEdicao, 
    alteraNota 
} from '../../actions'
import './home.css'


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

function Home({ listaNotas, adicionarNota, removerNota, editarFormulario }) {
    const props = { className: 'home' }

    let formNotas = montaFormNotas(adicionarNota, removerNota, editarFormulario)
    let sectionNotas = montaSectionNotas(listaNotas, adicionarNota, removerNota, editarFormulario)

    return (
        <main {...props}>
            <article className="home__container">
                {formNotas}
                {sectionNotas}
            </article>
        </main>
    )
}

const mapStateToProps = state => ({
    listaNotas: state.notas
})

const mapDispatchToProps = dispatch => ({
    adicionarNota: (titulo, texto, formulario, posicao) => {
        if (posicao === undefined) {
            dispatch(adicionaNota(titulo, texto))
            formulario.reset()
        } else {
            dispatch(alteraNota(posicao, titulo, texto))
        }
    },
    removerNota: (evento, posicao) => {
        evento.stopPropagation()
        dispatch(removeNota(posicao))
    },
    editarFormulario: posicao => {
        dispatch(habilitaEdicao(posicao))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)