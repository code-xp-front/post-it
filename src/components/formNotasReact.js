import React from 'react'

import FormInput from './formInputReact'
import FormTextArea from './formTextAreaReact'
import FormButton from './formButtonReact'
import Form from './formReact'
import Nota from '../Nota'


const createInputTitulo = (notaAlterada, index) => {
    const props = {
        key: 'note-title',
        className: 'note__title',
        type: 'text',
        name: 'title',
        placeholder: 'Título',
        defaultValue: notaAlterada.titulo,
        onChange: event => {
            notaAlterada.titulo = event.target.value;
        }
    }

    if ( index !== undefined && !notaAlterada.editando) {
        props.readOnly = true
    }

    return React.createElement(FormInput, props)
}

const createInputTexto = (notaAlterada, index) => {
    const props = {
        key: 'note-body',
        className: 'note__body',
        name: 'body',
        rows: '5',
        placeholder: 'Criar uma nota...',
        defaultValue: notaAlterada.texto,
        onChange: event => {
            notaAlterada.texto = event.target.value;
        }
    }

    if ( index !== undefined && !notaAlterada.editando) {
        props.readOnly = true
    }

    return React.createElement(FormTextArea, props)
}

const createBotaoSalvar = (adicionarNota, notaAlterada, index) => {
    const props = {
        key: 'note-button-save',
        className: 'note__control',
        type: 'button',
        onClick: event => adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, index)
    }

    const children = 'Salvar'

    return React.createElement(FormButton, props, children)

};

const createButtonRemover = (excluirNota, index) => {

    const props = {
        key: 'note-button-delete',
        className: 'note__excluir',
        onClick: event => excluirNota(event, index)
    }

    const children = React.createElement('i', {
        className: 'fa fa-times',
        'aria-hidden': true
    })

    return React.createElement(FormButton, props, children)
};


function FormNotas(props) {
    const { notaAtual, index, adicionarNota, excluirNota, editarNota } = props;

    let notaAlterada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando)

    let inputTitulo = createInputTitulo(notaAlterada, index);
    let inputTexto = createInputTexto(notaAlterada, index);
    let botaoExcluir = createButtonRemover(excluirNota, index);
    let botaoSalvar = createBotaoSalvar(adicionarNota, notaAlterada, index);

    let children;
    let propsForm = { className: 'note' };

    if (index === undefined) {
        // template nova nota
        children = [inputTitulo, inputTexto, botaoSalvar]
    } else {

        if (notaAlterada.editando === true) {
            
            children = [botaoExcluir, inputTitulo, inputTexto, botaoSalvar];

        } else {
            propsForm.onClick = () => editarNota(index);
            children = [botaoExcluir, inputTitulo, inputTexto];
        }
    }


    if (notaAlterada.editando === true) {
        formNotas.className = 'note note--editing';
        inputTitulo.className = 'note__title note--editing';
        inputTexto.className = 'note__body note__body--editing';
    }

    return React.createElement(Form, propsForm, children)
}

export default FormNotas;


