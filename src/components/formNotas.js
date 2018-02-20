import React from 'react'
import Form from './form.js'
import FormInput from './formInput.js'
import FormTextarea from './formTextarea.js'
import FormButton from './formButton.js'
import Nota from '../nota'


function montaInputTitulo(notaCopiada) {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        readOnly: !notaAtual.editando,
        defaultValue: notaAtual.titulo
    }

    return React.createElement(FormInput, props)
}

function montaTextareaTexto(notaCopiada) {
    const props = {
        className: 'note__body', 
        name: 'texto', 
        placeholder: 'Criar uma nota...', 
        rows: 5, 
        readOnly: !notaAtual.editando,
        defaultValue: notaAtual.texto
    }

    return React.createElement(FormTextarea, props)
}

function montaButtonRemover(removerNota, posicao) {
    const props = {
        className: 'note__control', 
        type: 'button', 
        onClick: event => removerNota(event, posicao)
    }

    const children = React.createElement('i', { className: 'fa fa-times', 'aria-hidden': true})

    return React.createElement(FormButton, props, children)
}

function montaButtonConcluir(adicionarNota, notaCopiada, posicao) {
    const props = {
        className: 'note__control', 
        type: 'button', 
        onClick: () => adicionarNota(notaCopiada.titulo, notaCopiada.texto, event.target.form, posicao)
    }

    const children = 'Concluído'

    return React.createElement(FormButton, props, children)
}

function FormNotas({ posicao, notaAtual, adicionarNota, removerNota, editarFormulario }) {
    let notaCopiada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando)    
    
    let inputTitulo = montaInputTitulo(notaCopiada)
    let textareaTexto = montaTextareaTexto(notaCopiada)
    
    let props = { className: 'note' }
    let children

    if (notaCopiada.editando) {
        let buttonRemover = montaButtonRemover(removerNota, posicao)
        let buttonConcluido = montaButtonConcluir(adicionarNota, notaCopiada, posicao)
        children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido]
    } else {
        children = [inputTitulo, textareaTexto]
        props.onClick = () => editarFormulario(posicao)
    }

    return React.createElement(Form, props, children)
}

export default FormNotas