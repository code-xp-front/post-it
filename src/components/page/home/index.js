import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Nota from '../../../nota'
import FormNotas from '../../formNotas'
import SectionNotas from '../../sectionNotas'
import { 
    listaNotas, 
    adicionaNota, 
    removeNota, 
    habilitaEdicao, 
    alteraNota
} from '../../../actions'
import './home.css'


class Home extends React.Component {
    componentDidMount() {
        this.props.buscarNotas()
    }

    render () {
        const { usuario, listaNotas, adicionarNota, removerNota, editarFormulario } = this.props
        const notaAtual = new Nota(undefined, '', '')
        const propsFormNotas = { adicionarNota, removerNota, editarFormulario }
        const propsSectionNotas = { listaNotas, adicionarNota, removerNota, editarFormulario }
        
        return usuario ? (
            <main className="home">
                <article className="home__container">
                    <FormNotas notaAtual={notaAtual} {...propsFormNotas} />
                    <SectionNotas {...propsSectionNotas} />
                </article>
            </main>
        ) : (
            <Redirect to="/login" />
        )
    }
}

const mapStateToProps = state => ({
    usuario: state.usuario,
    listaNotas: state.notas
})

const mapDispatchToProps = dispatch => ({
    buscarNotas: () => {
        dispatch(listaNotas())
    },
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