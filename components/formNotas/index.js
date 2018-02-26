import React from 'react'
import FaClose from 'react-icons/lib/fa/close'
import Form from '../form'
import FormInput from '../form/formInput'
import FormTextarea from '../form/formTextarea'
import FormButton from '../form/formButton'
import Nota from '../../nota'
import './formNotas.css'


function montaInputTitulo(notaCopiada) {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        defaultValue: notaCopiada.titulo,
        onChange: event => notaCopiada.titulo = event.target.value
    }

    if (notaCopiada.posicao !== undefined && !notaCopiada.editando) {
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

    if (notaCopiada.posicao !== undefined && !notaCopiada.editando) {
        props.readOnly = true
    }

    return <FormTextarea {...props} />
}

function montaButtonRemover(removerNota, notaCopiada) {
    const props = {
        className: 'note__control', 
        type: 'button', 
        onClick: event => removerNota(event, notaCopiada.posicao)
    }

    return <FormButton {...props}><FaClose /></FormButton>
}

function montaButtonConcluir(adicionarNota, notaCopiada) {
    const props = {
        className: 'note__control', 
        type: 'button', 
        onClick: event => {
            adicionarNota(notaCopiada.titulo, notaCopiada.texto, event.target.form, notaCopiada.posicao)
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
    if (notaCopiada.posicao !== undefined && !notaCopiada.editando) {
        props.onClick = () => editarFormulario(notaCopiada.posicao)
    }

    return (
        <Form {...props}>
            {notaCopiada.posicao !== undefined && notaCopiada.editando && buttonRemover}
            {inputTitulo}
            {textareaTexto}
            {(notaCopiada.posicao === undefined || notaCopiada.editando) && buttonConcluir}
        </Form>
    )
}

export default FormNotas