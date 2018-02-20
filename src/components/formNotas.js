import React from 'react'
import Form from './form.js'
import FormInput from './formInput.js'
import FormTextarea from './formTextarea.js'
import FormButton from './formButton.js'
import Nota from '../nota'


function montaInputTitulo(notaCopiada, posicao) {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        defaultValue: notaCopiada.titulo,
        onChange: (event) => notaCopiada.titulo = event.target.value
    }

    if (posicao !== undefined && !notaCopiada.editando) {
        props.readOnly = true;
    }

    return React.createElement(FormInput, props)
}

function montaTextareaTexto(notaCopiada, posicao) {
    const props = {
        className: 'note__body', 
        name: 'texto', 
        placeholder: 'Criar uma nota...', 
        rows: 5, 
        defaultValue: notaCopiada.texto,
        onChange: (event) => notaCopiada.texto = event.target.value
    }

    if (posicao !== undefined && !notaCopiada.editando) {
        props.readOnly = true;
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
        onClick: (event) => adicionarNota(notaCopiada.titulo, notaCopiada.texto, event.target.form, posicao)
    }

    const children = 'Concluído'

    return React.createElement(FormButton, props, children)
}

function FormNotas({ posicao, notaAtual, adicionarNota, removerNota, editarFormulario }) {
    let notaCopiada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando)    
    
    let inputTitulo = montaInputTitulo(notaCopiada, posicao)
    let textareaTexto = montaTextareaTexto(notaCopiada, posicao)
    let buttonRemover = montaButtonRemover(removerNota, posicao)
    let buttonConcluido = montaButtonConcluir(adicionarNota, notaCopiada, posicao)
    
    let props = { className: 'note' }
    let children

    if (posicao === undefined) {
        children = [inputTitulo, textareaTexto, buttonConcluido]
    } else {
        if (notaCopiada.editando) {
            children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido]
        } else {
            children = [inputTitulo, textareaTexto]
            props.onClick = () => editarFormulario(posicao)
        }
    }

    return React.createElement(Form, props, ...children)
}

export default FormNotas