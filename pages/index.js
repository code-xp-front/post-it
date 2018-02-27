import React from 'react'
import withRedux from "next-redux-wrapper";
import Router from 'next/router'
import Nota from '../nota'
import Layout from "../components/layout"
import FormNotas from '../components/formNotas'
import SectionNotas from '../components/sectionNotas'
import { listaNotas, adicionaNota, removeNota, habilitaEdicao, alteraNota  } from '../actions'
import makeStore from '../store'
import './index.css'


class Index extends React.Component {
    componentDidMount() {
        this.props.buscarNotas()
    }

    render () {
        const { usuario, listaNotas, adicionarNota, removerNota, editarFormulario } = this.props
        const notaAtual = new Nota(undefined, '', '')
        const propsFormNotas = { adicionarNota, removerNota, editarFormulario }
        const propsSectionNotas = { listaNotas, adicionarNota, removerNota, editarFormulario }
        
        if (!usuario) {
            this.props.redirecionaParaLogin()
        }

        return (
            <Layout className="index">
                <article className="index__container">
                    <FormNotas notaAtual={notaAtual} {...propsFormNotas} />
                    <SectionNotas {...propsSectionNotas} />
                </article>
            </Layout>
        )
    }
}

Index.defaultProps = {
    redirecionaParaLogin: () => {
        Router.push('/login')
    }
};

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

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Index)