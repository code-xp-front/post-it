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
        defaultValue: notaCopiada.titulo,
        onChange: event => notaCopiada.titulo = event.target.value
    }

    if (notaCopiada.estaVisualizando()) {
        props.readOnly = true
    }

    return <FormInput {...props} />
}

function montaTextareaTexto(notaCopiada) {
    const props = {
        className: 'note__body', 
        name: 'texto', 
        placeholder: 'Criar uma nota...', 
        rows: 5, 
        defaultValue: notaCopiada.texto,
        onChange: event => notaCopiada.texto = event.target.value
    }

    if (notaCopiada.estaVisualizando()) {
        props.readOnly = true
    }

    return <FormTextarea {...props} />
}

function montaButtonRemover(removerNota, notaCopiada) {
    const props = {
        className: 'note__control', 
        type: 'button', 
        onClick: event => {
            event.stopPropagation()
            removerNota(notaCopiada.posicao)
        }
    }

    const children = <i className='fa fa-times' aria-hidden={true} />

    return <FormButton {...props}>{children}</FormButton>
}

function montaButtonConcluir(adicionarNota, notaCopiada) {
    const props = {
        className: 'note__control', 
        type: 'button', 
        onClick: event => {
            adicionarNota(notaCopiada.titulo, notaCopiada.texto, notaCopiada.posicao)
            event.target.form.reset()
        }
    }

    const children = 'Concluído'

    return <FormButton {...props}>{children}</FormButton>
}

function FormNotas({ notaAtual, adicionarNota, removerNota, editarFormulario }) {
    let notaCopiada = new Nota(notaAtual.posicao, notaAtual.titulo, notaAtual.texto, notaAtual.editando)
    
    let inputTitulo = montaInputTitulo(notaCopiada)
    let textareaTexto = montaTextareaTexto(notaCopiada)
    let buttonRemover = montaButtonRemover(removerNota, notaCopiada)
    let buttonConcluir = montaButtonConcluir(adicionarNota, notaCopiada)
    
    let props = { className: 'note' }
    if (notaCopiada.estaVisualizando()) {
        props.onClick = () => editarFormulario(notaCopiada.posicao)
    }

    return (
        <Form {...props}>
            {notaCopiada.estaAlterando() && buttonRemover}
            {inputTitulo}
            {textareaTexto}
            {(notaCopiada.estaCadastrando() || notaCopiada.estaAlterando()) && buttonConcluir}
        </Form>
    )
}

export default FormNotas