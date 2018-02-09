import React, { createElement as e } from 'react';
import Icon from './icon';
import Form from './form.js';
import FormInput from './formInput.js';
import FormTextarea from './formTextarea.js';
import FormButton from './formButton.js';
import Nota from '../nota';


const criaInputTitulo = notaCopiada => {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        defaultValue: notaCopiada.titulo,
        onChange: e => notaCopiada.titulo = e.target.value
    };

    if (notaCopiada.posicao && !notaCopiada.editando) {
        props.readOnly = true;
    }

    return e(FormInput, props);
};

const criaTextareaTexto = notaCopiada => {
    const props = {
        className: 'note__body',
        name: 'texto',
        placeholder: 'Criar uma nota...',
        rows: 5,
        defaultValue: notaCopiada.texto,
        onChange: e => notaCopiada.texto = e.target.value
    };

    if (notaCopiada.posicao && !notaCopiada.editando) {
        props.readOnly = true;
    }

    return e(FormTextarea, props);
};

const criaButtonConcluir = (adicionarNota, notaCopiada) => {
    const props = {
        className: 'note__control',
        type: 'button',
        children: 'Concluído',
        onClick: e => {
            adicionarNota(notaCopiada.posicao, notaCopiada.titulo, notaCopiada.texto);
            e.target.form.reset();
        }
    };

    return e(FormButton, props);
};

const criaButtonRemover = (removerNota, notaCopiada) => {
    const props = {
        className: 'note__control',
        type: 'button',
        children: e(Icon, { className: 'fa fa-times', 'aria-hidden': true }),
        onClick: e => {
            e.stopPropagation();
            removerNota(notaCopiada.posicao);
        }
    };

    return e(FormButton, props);
};


export default ({ notaAtual, editarFormulario, adicionarNota, removerNota }) => {
    let formNotas;
    let notaCopiada = new Nota(notaAtual.posicao, notaAtual.titulo, notaAtual.texto, notaAtual.editando);
    let inputTitulo = criaInputTitulo(notaCopiada);
    let textareaTexto = criaTextareaTexto(notaCopiada);
    let buttonConcluir = criaButtonConcluir(adicionarNota, notaCopiada);
    let buttonRemover = criaButtonRemover(removerNota, notaCopiada);

    let props = { className: 'note' };
    let children;

    if (notaCopiada.posicao === undefined) {
        children = [inputTitulo, textareaTexto, buttonConcluir];
    } else if (notaCopiada.editando) {
        children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluir];
    } else {
        props.onClick = () => editarFormulario(notaCopiada.posicao);
        children = [inputTitulo, textareaTexto];
    }

    return e(Form, props, ...children);
};