import React from 'react'
import { connect } from 'react-redux'
import Page from './index'
import { adicionaNota, removeNota, habilitaEdicao, alteraNota } from '../../actions'


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

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page)

export default PageContainer