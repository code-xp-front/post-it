import React from 'react';
import Form from './form.js';
import FormInput from './formInput.js';
import FormTextarea from './formTextarea.js';
import FormButton from './formButton.js';

const criaInputTitulo = ({ posicao, notaAtual }) => {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        defaultValue: notaAtual.titulo
    };

    if (posicao && !notaAtual.editando) {
        props.readOnly = true;
    }
    
    return React.createElement(FormInput, props);
};

const criaTextareaTexto = ({ posicao, notaAtual }) => {
    const props = {
        className: 'note__body', 
        name: 'texto', 
        placeholder: 'Criar uma nota...', 
        rows: 5, 
        defaultValue: notaAtual.texto
    };

    if (posicao && !notaAtual.editando) {
        props.readOnly = true;
    }

    return React.createElement(FormTextarea, props);
};

const criaButtonConcluir = ({ posicao, adicionarNota }, inputTitulo, textareaTexto, formNotas) => {   
    const props = {
        className: 'note__control', 
        type: 'button', 
        children: 'Concluído',
        onClick: (event) => adicionarNota(inputTitulo, textareaTexto, event.target.form, posicao)
    };

    return React.createElement(FormButton, props);
};

const criaButtonRemover = ({ posicao, removerNota}) => {
    const props = {
        className: 'note__control', 
        type: 'button', 
        children: '<i class="fa fa-times" aria-hidden="true"></i>',
        onClick: event => removerNota(event, posicao)
    };
    
    return React.createElement(FormButton, props);
};


function FormNotas(props) {
    let formNotas;
    let inputTitulo = criaInputTitulo(props);
    let textareaTexto = criaTextareaTexto(props);

    if (!props.posicao) {
        let buttonConcluido = criaButtonConcluir(props, inputTitulo, textareaTexto, formNotas);

        return React.createElement(
            Form, 
            {className: "note"}, 
            [inputTitulo, textareaTexto, buttonConcluido]
        );
    } else if(props.notaAtual.editando) {
        let buttonRemover = criaButtonRemover(props);
        let buttonConcluido = criaButtonConcluir(props, inputTitulo, textareaTexto, formNotas);

        return React.createElement(
            Form, 
            {className: "note"}, 
            [buttonRemover, inputTitulo, textareaTexto, buttonConcluido]
        );
    } else {
        return React.createElement(
            Form, 
            {className: "note", onClick: props.editarFormulario(props.posicao)}, 
            [inputTitulo, textareaTexto]
        );
    }

    formNotas = new Form(formProps);

    return React.createElement(Form, formProps);
}

export default FormNotas;