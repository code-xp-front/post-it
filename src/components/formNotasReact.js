import React from 'react'

import FormInput from './formInputReact'
import FormTextArea from './formTextAreaReact'
import FormButton from './formButtonReact'
import Form from './formReact'
import Nota from '../Nota'


createInputTitulo = (notaAlterada) => {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'title',
        placeholder: 'Título',
        readOnly: !notaAlterada.editando,
        defaultValue: notaAlterada.titulo,
        onChange: event => {
            notaAlterada.titulo = event.target.value;
        }
    }

    return React.createElement(FormInput, props)
}

createInputTexto = (notaAlterada) => {
    const props = {
        className: 'note__body',
        name: 'body',
        rows: '5',
        placeholder: 'Criar uma nota...',
        readOnly: !notaAlterada.editando,
        defaultValue: notaAlterada.texto,
        onChange: event => {
            notaAlterada.texto = event.target.value;
        }
    }

    return React.createElement(FormTextArea, props)
}

createBotaoSalvar = (adicionarNota, notaAlterada, index) => {
    const props = {
        className: 'note__control',
        type: 'button',
        onClick: event => adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, index) 
    }

    const children = 'Salvar'

    return React.createElement(FormButton, props, children)

};

createButtonRemover = (excluirNota, index) => {

    const props = {
        className: 'note__excluir',
        onClick: event => excluirNota(event, index)
    }

    const children = React.createElement ('i', {
        className: 'fa fa-times',
        'aria-hidden': true
    })

    return React.createElement(FormButton, props, children)
};

function FormNotas(props) {

    let notaAlterada = new Nota(props.notaAtual.titulo, props.notaAtual.texto, props.notaAtual.editando)

    let inputTitulo = createInputTitulo(notaAlterada);
    let inputTexto = createInputTexto(notaAlterada);

    let onClick;
    let children;

    if (props.notaAtual.editando === true) {
        let botaoSalvar = createBotaoSalvar(props.adicionarNota, notaAlterada, props.index);
        let botaoExcluir = createButtonRemover(props.excluirNota, props.index);

        onClick = () => { };

        children = [botaoExcluir, inputTitulo, inputTexto, botaoSalvar];

    } else {
        onClick = () => {
            props.editarNota(props.index);
        };

        children = [inputTitulo, inputTexto];

    };


    let formProps = {
        className: 'note',
        // onClick: onClick
    };

    formNotas = React.createElement(Form, formProps, children);


    if (props.notaAtual.editando === true) {
        formNotas.className = 'note note--editing';
        inputTitulo.className = 'note__title note--editing';
        inputTexto.className = 'note__body note__body--editing';
    }

    return formNotas;
}

export default FormNotas;


