import FormInput from './FormInput.js';
import FormTextArea from './FormTextArea.js';
import FormButton from './FormButton.js';
import TituloNaoEditavel from './TituloNaoEditavel.js';
import TextoNaoEditavel from './TextoNaoEditavel.js';

import Form from './Form.js';

const createInputTitulo = (notaAtual) => {
    const props = {
        className: 'note__title',
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
        className: 'note__body',
        name: 'body',
        rows: '5',
        placeholder: 'Criar uma nota...',
        children: notaAtual.texto,
        readonly: !notaAtual.editando
    };

    return new FormTextArea(props);
};

const createBotaoSalvar = (inputTitulo, inputTexto, formularioNotas, index) => {
    const props = {
        className: 'note__control',
        type: 'button',
        children: 'Salvar',
        onclick: () => {
            adicionarNota(inputTitulo, inputTexto, formularioNotas, index);
        }
    };

    return new FormButton(props);

};

const createButtonRemover = (index) => {

    const props = {
        className: 'note__excluir',
        children: '<i class="fa fa-times" aria-hidden="true"></i>',
        onclick: (evento) => {
            excluirNota(evento, index);
        }
    };

    return new FormButton(props);
};

function FormNotas(props) {

    let inputTitulo = createInputTitulo(props.notaAtual);
    let inputTexto = createInputTexto(props.notaAtual);

    // let h1Titulo = createTituloNaoEditavel(props.notaAtual);
    // let pTexto = createTextoNaoEditavel(props.notaAtual);

    let funcaoClick;
    let children;

    if (props.notaAtual.editando === true) {
        let botaoSalvar = createBotaoSalvar(inputTitulo, inputTexto, formNotas, props.index);
        let botaoExcluir = createButtonRemover(props.index);

        funcaoClick = () => { };

        children = [botaoExcluir, inputTitulo, inputTexto, botaoSalvar];

    } else {
        funcaoClick = () => {
            props.editarNota(props.index);
        };

        children = [inputTitulo, inputTexto];

    };


    let propsForm = {
        className: 'note',
        children: children,
        onclick: funcaoClick
    };

    let formNotas = new Form(propsForm);


    if (props.notaAtual.editando === true) {
        formNotas.className = 'note note--editing';
        inputTitulo.className = 'note__title note--editing';
        inputTexto.className = 'note__body note__body--editing';
    }

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

//     const createTituloNaoEditavel = (notaAtual) => {
//     const props = {
//         className: 'note__title',
//         children: notaAtual.titulo,
//     };

//     return new TituloNaoEditavel(props);
// };

// const createTextoNaoEditavel = (notaAtual) => {
//     const props = {
//         className: 'note__body',
//         children: notaAtual.texto,
//     };

//     return new TextoNaoEditavel(props);
// };