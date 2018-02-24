import React from 'react'
import FaClose from 'react-icons/lib/fa/close'
import Form from '../form'
import FormInput from '../form/formInput'
import FormTextarea from '../form/formTextarea'
import FormButton from '../form/formButton'
import Nota from '../../nota'
import './formNotas.css'


function montaInputTitulo(notaCopiada, posicao) {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        defaultValue: notaCopiada.titulo,
        onChange: event => notaCopiada.titulo = event.target.value
    }

    if (posicao !== undefined && !notaCopiada.editando) {
        props.readOnly = true
    }

    return <FormInput {...props} />
}

function montaTextareaTexto(notaCopiada, posicao) {
    const props = {
        className: 'note__body', 
        name: 'texto', 
        placeholder: 'Criar uma nota...', 
        rows: 5, 
        defaultValue: notaCopiada.texto,
        onChange: event => notaCopiada.texto = event.target.value
    }

    if (posicao !== undefined && !notaCopiada.editando) {
        props.readOnly = true
    }

    return <FormTextarea {...props} />
}

function montaButtonRemover(removerNota, posicao) {
    const props = {
        className: 'note__control', 
        type: 'button', 
        onClick: event => removerNota(event, posicao)
    }

    return <FormButton {...props}><FaClose /></FormButton>
}

function montaButtonConcluir(adicionarNota, notaCopiada, posicao) {
    const props = {
        className: 'note__control', 
        type: 'button', 
        onClick: event => {
            adicionarNota(notaCopiada.titulo, notaCopiada.texto, event.target.form, posicao)
        }
    }

    const children = 'Concluído'

    return <FormButton {...props}>{children}</FormButton>
}

function FormNotas({ posicao, notaAtual, adicionarNota, removerNota, editarFormulario }) {
    let notaCopiada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando)
    
    let inputTitulo = montaInputTitulo(notaCopiada, posicao)
    let textareaTexto = montaTextareaTexto(notaCopiada, posicao)
    let buttonRemover = montaButtonRemover(removerNota, posicao)
    let buttonConcluir = montaButtonConcluir(adicionarNota, notaCopiada, posicao)
    
    let props = { className: 'note' }
    if (posicao !== undefined && !notaCopiada.editando) {
        props.onClick = () => editarFormulario(posicao)
    }

    return (
        <Form {...props}>
            {posicao !== undefined && notaCopiada.editando && buttonRemover}
            {inputTitulo}
            {textareaTexto}
            {(posicao === undefined || notaCopiada.editando) && buttonConcluir}
        </Form>
    )
}

export default FormNotas