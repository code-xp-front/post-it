import FormInput from './FormInput.js';
import FormTextArea from './FormTextArea.js';
import FormButton from './FormButton.js';
import TituloNaoEditavel from './TituloNaoEditavel.js';
import TextoNaoEditavel from './TextoNaoEditavel.js';

import Form from './Form.js';

const createInputTitulo = (notaAtual) => {
    const props = {
        className: 'note__title note--editing',
        type: 'text',
        name: 'title',
        placeholder: 'Título',
        value: notaAtual.titulo,
        readonly: !notaAtual.editando
    };

    return new FormInput(props);
};

const createInputTexto = (notaAtual) => {
    const props = {
        className: 'note__body note__body--editing',
        name: 'body',
        rows: '5',
        placeholder: 'Criar uma nota...',
        children: notaAtual.texto,
        readonly: !notaAtual.editando
    };

    return new FormTextArea(props);
};

const createTituloNaoEditavel = (notaAtual) => {
    const props = {
        className: 'note__title',
        children: notaAtual.titulo,
    };

    return new TituloNaoEditavel(props);
};

const createTextoNaoEditavel = (notaAtual) => {
    const props = {
        className: 'note__body',
        children: notaAtual.texto,
    };

    return new TextoNaoEditavel(props);
};

const createBotaoSalvar = (inputTitulo, inputTexto, formularioNotas, index) => {
    const props = {
         className: 'note__control',
        type: 'button',
        value: 'Salvar',
        onclick: () => {
            adicionarNota(inputTitulo, inputTexto, formularioNotas, index);
        }
    };

    return new FormButton(props);

};

const createButtonRemover = (evento, index) => {

    const props = {
        className: 'note__excluir',
        children: '<i class="fa fa-times" aria-hidden="true"></i>',
        onclick: () => {
            excluirNota(evento, index);
        }
    };

    return new FormButton();
};

function FormNotas(props) {

    let inputTitulo = createInputTitulo(props.notaAtual);
    let inputTexto = createInputTexto(props.notaAtual);

    let h1Titulo = createTituloNaoEditavel(props.notaAtual);
    let pTexto = createTextoNaoEditavel(props.notaAtual);

    let botaoSalvar = createBotaoSalvar(inputTitulo, inputTexto, formularioNotas, index);
    let botaoExcluir = createButtonRemover(evento, index);

    let funcaoClick;
    let children;
    
    if (props.notaAtual.editando === true){
        funcaoClick = () => {};
        children: [inputTitulo, inputTexto, botaoSalvar];
        
    } else {
        funcaoClick = () => {
            props.editarNota(props.index);
        };
        children: [h1Titulo, pTexto, botaoExcluir];

    };

    let propsForm = {
        className: 'note note--editing',
        children: children,
        onclick: funcaoClick
    };


    // if (props.notaAtual.editando === true){
    //     let buttonRemover = createButtonRemover(props);
    //     propsForm.children = [buttonRemover].concat(props.children);
    // } else {
    //     funcaoClick = () => {
    //         props.editarNota(props.index);
    //     };
    // };

    let formNotas = new Form(propsForm);

    return formNotas;
}

export default FormNotas;


// let inputTitulo = new FormInput({
    //     className: 'note__title note--editing',
    //     type: 'text',
    //     name: 'title',
    //     placeholder: 'Título',
    //     value: props.notaAtual.titulo,
    //     readonly: !props.notaAtual.editando
    // });

    // let inputTexto = new FormTextArea({
    //     className: 'note__body note__body--editing',
    //     name: 'body',
    //     rows: '5',
    //     placeholder: 'Criar uma nota...'
    // });

    // let botaoSalvar = new FormButton({
    //     className: 'note__control',
    //     type: 'button',
    //     value: 'Salvar',
    //     onclick: () => {
    //         adicionarNota(inputTitulo, inputTexto, formularioNotas, index);
    //     }
    // });